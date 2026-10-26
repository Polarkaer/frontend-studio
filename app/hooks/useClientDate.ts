// hooks/useClientDate.ts
'use client';

import { useState, useEffect } from 'react';
import { TimeUnit } from '@/lib/enums';

export interface UseClientDateProps {
  timeUnit?: TimeUnit;
}

export function useClientDate({ timeUnit }: UseClientDateProps = {}) {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    // This only runs on the client after hydration
    const currentDate = new Date();
    const unit = String(timeUnit ?? '').toLowerCase();

    if (unit.includes('year')) {
      currentDate.setMonth(0, 1);
      currentDate.setHours(0, 0, 0, 0);
    } else if (unit.includes('month')) {
      currentDate.setDate(1);
      currentDate.setHours(0, 0, 0, 0);
    } else if (unit.includes('day')) {
      currentDate.setHours(0, 0, 0, 0);
    } else if (unit.includes('hour')) {
      currentDate.setMinutes(0, 0, 0);
    } else if (unit.includes('minute')) {
      currentDate.setSeconds(0, 0);
    }

    setDate(currentDate);
  }, [timeUnit]);

  return date;
}