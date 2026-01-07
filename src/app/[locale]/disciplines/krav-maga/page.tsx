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
  Shield,
  Zap,
  Target,
  Brain,
  CheckCircle2,
  AlertTriangle,
  Users,
} from 'lucide-react';

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

const principleIcons = [Target, Zap, Shield, Brain];

export default function KravMagaPage() {
  const t = useTranslations('pages.kravmaga');
  const tCommon = useTranslations('common');

  const principles = t.raw('principles.items') as Array<{ name: string; description: string }>;
  const trainingItems = t.raw('training.items') as string[];
  const credentials = t.raw('instructor.credentials') as string[];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-ink to-ink" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-crimson/10 rounded-full blur-3xl" />

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
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">
              {t('hero.subtitle')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t('hero.tagline')}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">
                {t('intro.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('intro.description')}
              </p>
              <blockquote className="border-l-4 border-gold pl-6 italic text-foreground">
                {t('intro.philosophy')}
              </blockquote>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-card/50 border-crimson/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-gold" />
                    <h3 className="text-xl font-semibold">
                      {t('recognition.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('recognition.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4 Principles Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('principles.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const Icon = principleIcons[index];
              return (
                <motion.div
                  key={principle.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border hover:border-gold/50 transition-colors text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gold">
                        {principle.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Approach */}
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
                {t('training.title')}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('training.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mb-8"
            >
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-crimson mb-4" />
                  <p className="text-foreground">
                    {t('training.approach')}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-gold mb-4" />
                  <p className="text-foreground">
                    {t('training.stress')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-gold/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Target className="w-5 h-5 text-gold" />
                    Ce que vous apprendrez
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {trainingItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-crimson/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Users className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('accessibility.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('accessibility.description')}
            </p>
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

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="bg-gradient-to-br from-gold/20 to-gold/5 border-gold/30">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('cta.title')}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {t('cta.description')}
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold">
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
