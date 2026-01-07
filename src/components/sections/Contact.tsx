'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { key: 'address', icon: MapPin },
  { key: 'phone', icon: Phone },
  { key: 'email', icon: Mail },
];

export function Contact() {
  const t = useTranslations('contact');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ink to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-crimson/5 rounded-full blur-3xl" />

      {/* Large Chinese Character Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[500px] font-bold chinese-text text-white/[0.015] pointer-events-none select-none">
        道
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('form.name')}
                      </label>
                      <Input
                        placeholder={t('form.name')}
                        className="bg-muted/50 border-border focus:border-gold"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('form.phone')}
                      </label>
                      <Input
                        type="tel"
                        placeholder={t('form.phone')}
                        className="bg-muted/50 border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('form.email')}
                    </label>
                    <Input
                      type="email"
                      placeholder={t('form.email')}
                      className="bg-muted/50 border-border focus:border-gold"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('form.discipline')}
                    </label>
                    <select className="w-full px-4 py-2 bg-muted/50 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">
                      <option value="">-- {t('form.discipline')} --</option>
                      <option value="kungfu">Kung Fu</option>
                      <option value="kravmaga">Krav Maga</option>
                      <option value="jeetkundo">Jeet Kune Do</option>
                      <option value="taichi">Taichi Qigong</option>
                      <option value="taekwondo">Taekwondo</option>
                      <option value="mma">MMA</option>
                      <option value="children">Cours Enfants</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('form.message')}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t('form.message')}
                      className="w-full px-4 py-2 bg-muted/50 border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-martial bg-crimson hover:bg-crimson-dark text-white py-6"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        {t('form.success')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="card-martial bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {t(`${info.key}.title`)}
                          </p>
                          <p className="text-foreground font-medium">
                            {t(`${info.key}.value`)}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <Card className="card-martial bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-crimson" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t('hours.title')}
                      </p>
                      <p className="text-foreground font-medium">
                        {t('hours.weekdays')}
                      </p>
                      <p className="text-foreground font-medium">
                        {t('hours.saturday')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="relative aspect-video rounded-lg overflow-hidden border border-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-card to-ink flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                  <p className="text-muted-foreground">Reims, France</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Carte interactive bientôt disponible
                  </p>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/50" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
