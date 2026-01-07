'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sword,
  Shield,
  Zap,
  Wind,
  Target,
  Flame,
  Users,
  ArrowRight,
} from 'lucide-react';

const disciplines = [
  { key: 'kungfu', icon: Sword, color: 'crimson', slug: 'kung-fu' },
  { key: 'kravmaga', icon: Shield, color: 'gold', slug: 'krav-maga' },
  { key: 'jeetkundo', icon: Zap, color: 'crimson', slug: 'jeet-kune-do' },
  { key: 'taichi', icon: Wind, color: 'gold', slug: null },
  { key: 'taekwondo', icon: Target, color: 'crimson', slug: null },
  { key: 'mma', icon: Flame, color: 'gold', slug: null },
  { key: 'children', icon: Users, color: 'crimson', slug: null },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Disciplines() {
  const t = useTranslations('disciplines');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="disciplines"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ink/50 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Decorative Chinese Character */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-bold chinese-text text-white/[0.02] pointer-events-none select-none">
        武
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-sm mb-4 block">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 martial-line inline-block">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-8 text-lg">
            {t('description')}
          </p>
        </motion.div>

        {/* Disciplines Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {disciplines.map((discipline) => {
            const Icon = discipline.icon;
            const colorClass =
              discipline.color === 'crimson' ? 'text-crimson' : 'text-gold';
            const bgColorClass =
              discipline.color === 'crimson' ? 'bg-crimson/10' : 'bg-gold/10';
            const borderColorClass =
              discipline.color === 'crimson'
                ? 'hover:border-crimson/50'
                : 'hover:border-gold/50';

            return (
              <motion.div key={discipline.key} variants={itemVariants}>
                <Card
                  className={`card-martial bg-card/50 backdrop-blur-sm h-full group cursor-pointer ${borderColorClass}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-lg ${bgColorClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-7 h-7 ${colorClass}`} />
                      </div>
                      <span className="text-3xl chinese-text text-muted-foreground/50 group-hover:text-gold transition-colors">
                        {t(`${discipline.key}.chinese`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                      {t(`${discipline.key}.name`)}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {t(`${discipline.key}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(
                        t.raw(`${discipline.key}.benefits`) as string[]
                      ).map((benefit: string, index: number) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-muted/50 text-muted-foreground"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                    {discipline.slug ? (
                      <Link href={`/disciplines/${discipline.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`p-0 h-auto ${colorClass} hover:${colorClass} group/btn`}
                        >
                          {t('learnMore')}
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`p-0 h-auto ${colorClass} hover:${colorClass} group/btn opacity-50 cursor-default`}
                        disabled
                      >
                        {t('learnMore')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
