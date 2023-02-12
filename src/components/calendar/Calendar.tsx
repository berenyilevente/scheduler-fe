import React, { useEffect, useState } from 'react';
import {
  getDayData,
  getMonthData,
  getMonthFromDayNumber,
  getMonthFromMonthNumber,
  getMonthFromWeekNumber,
  getWeekData,
} from './utils/calenderFunction';
import DayView from './components/DayView';
import WeekView from './components/WeekView';
import MonthView from './components/MonthView';
import dayjs, { Dayjs } from 'dayjs';
import { Button, DropdownInput, Icon } from '@/components';
import Deadlines from './components/Deadlines';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { getBookingsAction } from '@/redux/state/booking-state/bookingActions';

export interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
  const { bookings } = useSelector((state: AppState) => state.bookings);

  const dispatch = useAppDispatch();

  const [currentDay, setCurrentDay] = useState<Dayjs>(getDayData());
  const [currentWeek, setCurrentWeek] = useState<Dayjs[]>(getWeekData());
  const [currentMonth, setCurrentMonth] = useState<Dayjs[][]>(getMonthData());

  const [dayIndex, setDayIndex] = useState<number>(dayjs().dayOfYear());
  const [weekIndex, setWeekIndex] = useState<number>(dayjs().week());

  const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
  const [selectedCalendarView, setSelectedCalendarView] =
    useState<string>('Month');

  const calendarViews: string[] = ['Day', 'Week', 'Month', 'Deadlines'];
  function onCalendarViewSelect(dorpdownValue: string): void {
    setSelectedCalendarView(dorpdownValue);
  }

  function onTodayClick(): void {
    if (selectedCalendarView === 'Day' && dayIndex !== dayjs().dayOfYear()) {
      setDayIndex(dayjs().dayOfYear());
    }
    if (selectedCalendarView === 'Week' && weekIndex !== dayjs().week()) {
      setWeekIndex(dayjs().week());
    }
    if (selectedCalendarView === 'Month' && monthIndex !== dayjs().month()) {
      setMonthIndex(dayjs().month());
    }
  }

  function onPrevious(): void {
    if (selectedCalendarView === 'Day') {
      setDayIndex(dayIndex - 1);
    }
    if (selectedCalendarView === 'Week') {
      setWeekIndex(weekIndex - 1);
    }
    if (selectedCalendarView === 'Month') {
      setMonthIndex(monthIndex - 1);
    }
  }

  function onNext(): void {
    if (selectedCalendarView === 'Day') {
      setDayIndex(dayIndex + 1);
    }

    if (selectedCalendarView === 'Week') {
      setWeekIndex(weekIndex + 1);
    }

    if (selectedCalendarView === 'Month') {
      setMonthIndex(monthIndex + 1);
    }
  }

  function RenderHeaderText(): JSX.Element {
    switch (selectedCalendarView) {
      case 'Day':
        return (
          <>{`${getMonthFromDayNumber(dayIndex)} ${currentDay.format(
            'dddd'
          )} ${currentDay.format('DD')}`}</>
        );

      case 'Week':
        return <>{getMonthFromWeekNumber(weekIndex)}</>;

      case 'Month':
        return <>{getMonthFromMonthNumber(monthIndex)}</>;

      default:
        return <></>;
    }
  }

  function RenderCalendarView(): JSX.Element {
    switch (selectedCalendarView) {
      case 'Day':
        return <DayView day={currentDay} bookings={bookings} />;

      case 'Week':
        return <WeekView week={currentWeek} bookings={bookings} />;

      case 'Month':
        return <MonthView month={currentMonth} bookings={bookings} />;

      case 'Deadlines':
        return <Deadlines />;

      default:
        return <></>;
    }
  }

  useEffect(() => {
    if (selectedCalendarView === 'Day') {
      setCurrentDay(getDayData(dayIndex));
    }

    if (selectedCalendarView === 'Week') {
      setCurrentWeek(getWeekData(weekIndex));
    }

    if (selectedCalendarView === 'Month') {
      setCurrentMonth(getMonthData(monthIndex));
    }
  }, [dayIndex, weekIndex, monthIndex]);

  useEffect(() => {
    dispatch(getBookingsAction());
  }, []);

  return (
    <div className="flex flex-col border border-slate-50 shadow-md rounded-sm ">
      <header className="bg-white px-4 py-4 flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <Button variant="outline" onClick={onTodayClick}>
            Today
          </Button>
          <div className="flex gap-x-2">
            <Icon iconType="arrowLeft" onClick={onPrevious} />
            <Icon iconType="arrowRight" onClick={onNext} />
          </div>
          <div className="text-md font-semibold flex gap-y-2">
            <RenderHeaderText />
          </div>
        </div>
        <div>
          <DropdownInput
            options={calendarViews}
            value={selectedCalendarView}
            onChange={(value) => onCalendarViewSelect(value)}
          />
        </div>
      </header>

      <RenderCalendarView />
    </div>
  );
};
