'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar } from 'lucide-react';

type ClassLevel = 'all' | 'beginner' | 'intermediate' | 'advanced' | 'children';

interface ScheduleItem {
  time: string;
  discipline: string;
  level: ClassLevel;
}

interface DaySchedule {
  day: string;
  classes: ScheduleItem[];
}

const schedule: DaySchedule[] = [
  {
    day: 'monday',
    classes: [
      { time: '18:00 - 19:30', discipline: 'Kung Fu', level: 'beginner' },
      { time: '19:30 - 21:00', discipline: 'Krav Maga', level: 'all' },
    ],
  },
  {
    day: 'tuesday',
    classes: [
      { time: '17:00 - 18:00', discipline: 'Cours Enfants', level: 'children' },
      { time: '18:30 - 20:00', discipline: 'Taekwondo', level: 'intermediate' },
      { time: '20:00 - 21:30', discipline: 'MMA', level: 'all' },
    ],
  },
  {
    day: 'wednesday',
    classes: [
      { time: '10:00 - 11:30', discipline: 'Taichi Qigong', level: 'all' },
      { time: '17:00 - 18:00', discipline: 'Cours Enfants', level: 'children' },
      { time: '18:30 - 20:00', discipline: 'Kung Fu', level: 'advanced' },
    ],
  },
  {
    day: 'thursday',
    classes: [
      { time: '18:00 - 19:30', discipline: 'Jeet Kune Do', level: 'all' },
      { time: '19:30 - 21:00', discipline: 'Krav Maga', level: 'intermediate' },
    ],
  },
  {
    day: 'friday',
    classes: [
      { time: '17:00 - 18:00', discipline: 'Cours Enfants', level: 'children' },
      { time: '18:30 - 20:00', discipline: 'Kung Fu', level: 'all' },
      { time: '20:00 - 21:30', discipline: 'MMA', level: 'advanced' },
    ],
  },
  {
    day: 'saturday',
    classes: [
      { time: '09:00 - 10:30', discipline: 'Taichi Qigong', level: 'all' },
      { time: '10:30 - 12:00', discipline: 'Taekwondo', level: 'all' },
      { time: '14:00 - 16:00', discipline: 'Stage Kung Fu', level: 'all' },
    ],
  },
];

const levelColors: Record<ClassLevel, string> = {
  all: 'bg-gold/20 text-gold border-gold/30',
  beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
  intermediate: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  advanced: 'bg-crimson/20 text-crimson border-crimson/30',
  children: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

export function Schedule() {
  const t = useTranslations('schedule');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ink/30 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

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

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {(Object.keys(levelColors) as ClassLevel[]).map((level) => (
              <Badge
                key={level}
                variant="outline"
                className={`${levelColors[level]} text-xs`}
              >
                {t(`levels.${level}`)}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
            >
              <Card className="card-martial bg-card/50 backdrop-blur-sm h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Calendar className="w-5 h-5 text-gold" />
                    {t(`days.${day.day}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {day.classes.map((classItem, classIndex) => (
                    <div
                      key={classIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground group-hover:text-gold transition-colors">
                            {classItem.discipline}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {classItem.time}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`${levelColors[classItem.level]} text-xs`}
                      >
                        {t(`levels.${classItem.level}`)}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="btn-martial bg-crimson hover:bg-crimson-dark text-white px-8 py-6 text-lg"
          >
            {t('trialClass')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
