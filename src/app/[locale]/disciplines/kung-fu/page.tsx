'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  Award,
  Users,
  Target,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function KungFuPage() {
  const t = useTranslations('pages.kungfu');
  const tCommon = useTranslations('common');

  const techniques = t.raw('techniques.items') as string[];
  const styles = t.raw('styles.items') as Array<{ name: string; description: string }>;
  const credentials = t.raw('instructor.credentials') as string[];

  const benefitGroups = ['children', 'teens', 'adults', 'seniors'] as const;
  const benefitIcons = {
    children: Users,
    teens: Target,
    adults: Sparkles,
    seniors: Award,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson/20 via-ink to-ink" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/#disciplines">
              <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {tCommon('backToHome')}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-8xl md:text-9xl font-bold text-gold/20 absolute -top-4 right-4 md:right-20 select-none">
              {t('hero.chinese')}
            </span>
            <Badge className="mb-4 bg-crimson/20 text-crimson border-crimson/30">
              Art Martial Traditionnel
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/disciplines/kung-fu.jpg"
                  alt="Kung Fu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">
                {t('intro.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('intro.description')}
              </p>
              <blockquote className="border-l-4 border-crimson pl-6 italic text-foreground">
                {t('intro.philosophy')}
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-crimson/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-card/50 border-gold/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Target className="w-5 h-5 text-crimson" />
                    {t('techniques.title')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('techniques.description')}
                  </p>
                  <ul className="space-y-3">
                    {techniques.map((technique, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                        <span>{technique}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('styles.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 border-border hover:border-gold/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gold">
                      {style.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {style.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits by Age */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('benefits.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitGroups.map((group, groupIndex) => {
              const Icon = benefitIcons[group];
              const items = t.raw(`benefits.${group}.items`) as string[];

              return (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: groupIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-lg font-semibold mb-4">
                        {t(`benefits.${group}.title`)}
                      </h3>
                      <ul className="space-y-2">
                        {items.map((item, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-crimson mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <blockquote className="text-xl md:text-2xl italic text-foreground max-w-3xl mx-auto">
              {t('purpose')}
            </blockquote>
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto bg-border/50" />

      {/* Instructor Credentials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('instructor.title')}
              </h2>
              <p className="text-xl text-gold">Grégory Bezruki</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant="outline"
                    className="py-2 px-4 text-sm border-gold/30"
                  >
                    {credential}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <MapPin className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('location.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('location.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="bg-gradient-to-br from-crimson/20 to-crimson/5 border-crimson/30">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('cta.title')}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {t('cta.description')}
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-crimson hover:bg-crimson/90 text-white">
                    {t('cta.button')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
