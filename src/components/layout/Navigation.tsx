'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'disciplines', href: '/#disciplines' },
  { key: 'about', href: '/#about' },
  { key: 'schedule', href: '/#schedule' },
  { key: 'contact', href: '/#contact' },
];

export function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('fr');

  useEffect(() => {
    const locale = window.location.pathname.startsWith('/en') ? 'en' : 'fr';
    setCurrentLocale(locale);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = currentLocale === 'fr' ? 'en' : 'fr';
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(fr|en)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Handle hash links on the same page
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHomePage = pathname === '/' || pathname === '';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <motion.div
              className="relative w-12 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-crimson to-crimson-dark shadow-lg shadow-crimson/20" />
              {/* Inner ring accent */}
              <div className="absolute inset-[2px] rounded-full border border-gold/30" />
              {/* Character */}
              <span className="relative text-2xl font-bold chinese-text text-gold drop-shadow-sm">
                武
              </span>
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-gold transition-colors duration-300">
                Arts Martiaux
              </span>
              <span className="text-[11px] font-semibold text-gold/80 tracking-[0.25em] uppercase">
                Reims
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes('#') && isHomePage) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  'hover:text-gold hover:bg-gold/10',
                  pathname === item.href || (item.href === '/' && isHomePage)
                    ? 'text-gold bg-gold/10'
                    : 'text-muted-foreground'
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-gold"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs font-medium">
                {currentLocale === 'fr' ? 'EN' : 'FR'}
              </span>
            </Button>

            {/* CTA Button */}
            <Button
              className="hidden md:flex btn-martial bg-crimson hover:bg-crimson-dark text-white font-medium"
              size="sm"
            >
              {t('joinUs')}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-border">
                <div className="flex flex-col h-full pt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-4 mb-8 px-2">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-crimson to-crimson-dark shadow-lg shadow-crimson/20" />
                      <div className="absolute inset-[2px] rounded-full border border-gold/30" />
                      <span className="relative text-2xl font-bold chinese-text text-gold drop-shadow-sm">
                        武
                      </span>
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-lg font-bold tracking-tight">Arts Martiaux</span>
                      <span className="text-[11px] font-semibold text-gold/80 tracking-[0.25em] uppercase">
                        Reims
                      </span>
                    </div>
                  </div>

                  {/* Mobile Nav Items */}
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            if (item.href.includes('#') && isHomePage) {
                              e.preventDefault();
                              handleNavClick(item.href);
                            } else {
                              setIsOpen(false);
                            }
                          }}
                          className={cn(
                            'block px-4 py-3 text-base font-medium rounded-md transition-all',
                            'hover:text-gold hover:bg-gold/10',
                            pathname === item.href || (item.href === '/' && isHomePage)
                              ? 'text-gold bg-gold/10'
                              : 'text-foreground'
                          )}
                        >
                          {t(item.key)}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="mt-auto space-y-4 pt-8">
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2"
                      onClick={toggleLocale}
                    >
                      <Globe className="w-4 h-4" />
                      {currentLocale === 'fr' ? 'English' : 'Français'}
                    </Button>
                    <Button className="w-full btn-martial bg-crimson hover:bg-crimson-dark text-white">
                      {t('joinUs')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
