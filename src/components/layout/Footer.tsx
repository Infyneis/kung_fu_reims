'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const quickLinks = [
  { key: 'home', href: '/' },
  { key: 'disciplines', href: '#disciplines' },
  { key: 'about', href: '#about' },
  { key: 'schedule', href: '#schedule' },
  { key: 'contact', href: '#contact' },
];

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tContact = useTranslations('contact');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold chinese-text text-gold">武</span>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                  Arts Martiaux
                </span>
                <span className="text-sm text-gold tracking-widest uppercase">
                  Reims
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('tagline')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-ink transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 martial-line">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3 pt-4">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson group-hover:bg-gold transition-colors" />
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 martial-line">
              {tContact('title')}
            </h3>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {tContact('address.value')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-muted-foreground">
                  {tContact('phone.value')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-muted-foreground">
                  {tContact('email.value')}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 martial-line">
              {t('newsletter.title')}
            </h3>
            <div className="pt-4">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 px-4 py-2 bg-muted border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-crimson hover:bg-gold text-white shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">
                {t('newsletter.title')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="section-divider" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Arts Martiaux Reims. {t('copyright').replace('© 2024 Arts Martiaux Reims. ', '')}
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
              {t('legal.privacy')}
            </a>
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
              {t('legal.terms')}
            </a>
          </div>
        </div>
      </div>

      {/* Chinese Watermark */}
      <div className="absolute bottom-4 right-4 text-[120px] font-bold chinese-text text-white/[0.02] pointer-events-none select-none">
        道
      </div>
    </footer>
  );
}
