'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Award, Users, Calendar, Trophy, Quote } from 'lucide-react';
import gsap from 'gsap';

const stats = [
  { key: 'students', value: 2000, suffix: '+', icon: Users },
  { key: 'years', value: 30, suffix: '+', icon: Calendar },
  { key: 'disciplines', value: 7, suffix: '', icon: Award },
  { key: 'competitions', value: 150, suffix: '+', icon: Trophy },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [isInView]);

  const credentials = t.raw('credentials.items') as string[];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-background to-ink" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-crimson/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Image placeholder with martial arts aesthetic */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              {/* Gradient background as placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-crimson/20 via-ink to-gold/20" />

              {/* Decorative frame */}
              <div className="absolute inset-4 border border-gold/30 rounded" />
              <div className="absolute inset-8 border border-crimson/20 rounded" />

              {/* Central character */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[200px] chinese-text text-gold/20">
                  師
                </span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-crimson text-white px-6 py-4 rounded-lg shadow-2xl"
            >
              <span className="text-3xl font-bold">9th</span>
              <span className="text-sm block">Dan</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="text-gold tracking-[0.3em] uppercase text-sm mb-4 block">
              {t('subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t('bio')}
            </p>

            {/* Quote */}
            <div
              ref={quoteRef}
              className="relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-4 left-4" />
              <p className="text-foreground italic pl-8 text-lg">
                {t('philosophy')}
              </p>
            </div>

            {/* Credentials */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gold">
                {t('credentials.title')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="border-gold/30 text-foreground py-2 px-3"
                    >
                      {credential}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <Separator className="my-16 bg-border/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.key} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {t(`stats.${stat.key}`)}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
