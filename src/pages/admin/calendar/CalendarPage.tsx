import { Calendar } from '@/components';

import React from 'react';

export interface CalendarPageProps {}

export const CalendarPage: React.FC<CalendarPageProps> = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">CalendarPage</h1>
      <Calendar />
    </div>
  );
};
