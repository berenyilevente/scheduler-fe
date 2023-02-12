import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekOfYear';
import dayOfYear from 'dayjs/plugin/dayOfYear';
dayjs.extend(weekOfYear);
dayjs.extend(dayOfYear);
dayjs.extend(weekYear);

export function getMonthData(monthOfYear = dayjs().month()): Dayjs[][] {
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, monthOfYear, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrixMonthView: Dayjs[][] = [];

  for (let i = 0; i < 5; i++) {
    const row: Dayjs[] = [];

    for (let j = 0; j < 7; j++) {
      currentMonthCount++;
      row.push(dayjs(new Date(year, monthOfYear, currentMonthCount)));
    }

    daysMatrixMonthView.push(row);
  }

  return daysMatrixMonthView;
}

export function getWeekData(weekOfYear = dayjs().week()): Dayjs[] {
  const firstDayOfYear = dayjs().startOf('year');
  const firstWeek = firstDayOfYear.week();
  const weekDiff = weekOfYear - firstWeek;
  const firstDayOfTheWeek = firstDayOfYear.add(weekDiff, 'week');
  const daysOfWeek: Dayjs[] = [];

  for (let i = 0; i < 7; i++) {
    daysOfWeek.push(firstDayOfTheWeek.add(i, 'day'));
  }

  return daysOfWeek;
}

export function getDayData(dayOfYear = dayjs().dayOfYear()) {
  const firstDayOfYear = dayjs().startOf('year');
  const today = firstDayOfYear.add(dayOfYear - 1, 'day');
  return today;
}

export function getMonthFromDayNumber(dayOfYear = dayjs().dayOfYear()): string {
  const currentYear = dayjs().year();
  const day = dayjs(`${currentYear}-01-01`).add(dayOfYear, 'day');
  return dayjs(day).format('MMMM YYYY');
}

export function getMonthFromWeekNumber(weekOfYear = dayjs().week()): string {
  const currentYear = dayjs().year();
  const weekStart = dayjs().year(currentYear).week(weekOfYear).startOf('week');
  return dayjs(weekStart).format('MMMM YYYY');
}

export function getMonthFromMonthNumber(monthOfYear = dayjs().month()): string {
  const month = dayjs(new Date(dayjs().year(), monthOfYear)).format(
    'MMMM YYYY'
  );
  return month;
}
