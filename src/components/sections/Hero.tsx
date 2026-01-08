'use client';

import { useRef, useEffect, Suspense, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ChevronDown, Sword } from 'lucide-react';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#c41e3a"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 20;
      pos[i + 1] = (Math.random() - 0.5) * 20;
      pos[i + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Points ref={particlesRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#d4af37"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c41e3a" />
      <AnimatedSphere />
      <ParticleField />
      <Environment preset="night" />
    </>
  );
}

export function Hero() {
  const t = useTranslations('hero');
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-char',
        { opacity: 0, y: 50, rotateX: 90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          delay: 0.5,
        }
      );

      gsap.fromTo(
        '.hero-element',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 1.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleChars = t('titleHighlight').split('');

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-crimson/10 via-transparent to-gold/10 z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-20 container mx-auto px-4 text-center"
      >
        {/* Chinese Wisdom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-6xl md:text-8xl chinese-text text-gold/80 gold-shimmer inline-block">
            {t('chineseWisdom')}
          </span>
          <p className="text-sm text-muted-foreground mt-2 tracking-wider">
            {t('wisdomTranslation')}
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          ref={subtitleRef}
          className="hero-element text-gold tracking-[0.3em] uppercase text-sm mb-4 flex items-center justify-center gap-3"
        >
          <span className="w-12 h-[1px] bg-gold" />
          {t('subtitle')}
          <span className="w-12 h-[1px] bg-gold" />
        </motion.p>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="block text-foreground mb-2">{t('title')}</span>
          <span className="gradient-text inline-block">
            {titleChars.map((char, index) => (
              <span
                key={index}
                className="hero-char inline-block"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h1>

        {/* Description */}
        <p className="hero-element text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('description')}
        </p>

        {/* CTA Buttons */}
        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="btn-martial bg-crimson hover:bg-crimson-dark text-white px-8 py-6 text-lg font-semibold group"
            onClick={() => scrollToSection('#contact')}
          >
            <Sword className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
            {t('cta')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gold/50 text-gold hover:bg-gold/10 px-8 py-6 text-lg"
            onClick={() => scrollToSection('#disciplines')}
          >
            {t('ctaSecondary')}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="hero-element mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#disciplines')}
          >
            <span className="text-xs text-muted-foreground tracking-wider">
              SCROLL
            </span>
            <ChevronDown className="w-6 h-6 text-gold" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse hidden lg:block z-10" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-crimson/20 rotate-45 hidden lg:block z-10" />
    </section>
  );
}
