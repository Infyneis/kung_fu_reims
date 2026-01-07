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
  Target,
  Zap,
  Heart,
  Brain,
  Users,
  Shield,
  CheckCircle2,
  Award,
  MapPin,
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

const benefitIcons = [Zap, Heart, Award, Brain, Users, Shield];

export default function TaekwondoPage() {
  const t = useTranslations('pages.taekwondo');
  const tCommon = useTranslations('common');

  const benefits = t.raw('benefits.items') as Array<{ title: string; description: string }>;
  const techniques = t.raw('techniques.items') as string[];
  const audienceItems = t.raw('audience.items') as string[];
  const credentials = t.raw('instructor.credentials') as string[];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 via-ink to-ink" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

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
            <span className="text-8xl md:text-9xl font-bold text-crimson/20 absolute -top-4 right-4 md:right-20 select-none">
              {t('hero.chinese')}
            </span>
            <Badge className="mb-4 bg-crimson/20 text-crimson border-crimson/30">
              {t('hero.tagline')}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-crimson">
                {t('intro.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('intro.description')}
              </p>
              <p className="text-foreground italic">
                {t('intro.philosophy')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-card/50 border-crimson/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-crimson" />
                    <h3 className="text-xl font-semibold">
                      {t('techniques.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {t('techniques.description')}
                  </p>
                  <ul className="space-y-2">
                    {techniques.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-crimson/5 to-transparent">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border hover:border-crimson/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-crimson" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-crimson">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Women's Self-Defense */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('women.title')}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t('women.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Users className="w-12 h-12 text-crimson mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('audience.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('audience.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {audienceItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant="outline"
                    className="py-2 px-4 text-sm border-crimson/30"
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto bg-border/50" />

      {/* Instructor */}
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
              <p className="text-xl text-crimson">Grégory Bezruki</p>
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
                    className="py-2 px-4 text-sm border-crimson/30"
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-crimson/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <MapPin className="w-12 h-12 text-crimson mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                  <Button size="lg" className="bg-crimson hover:bg-crimson/90 text-white font-semibold">
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
