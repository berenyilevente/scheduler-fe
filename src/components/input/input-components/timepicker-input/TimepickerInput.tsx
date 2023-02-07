import React, { useState } from 'react';
import { timeValues } from '@/utils';
import { InputLabel, InputError } from '@/components';

export interface TimepickerInputProps {
  onChange: (time: string, componentType: string | null) => void;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  componentType?: string;
  bookedTimes?: string[];
}

export const TimepickerInput: React.FC<TimepickerInputProps> = ({
  onChange,
  label,
  required,
  errorMessage,
  componentType,
  bookedTimes,
}) => {
  //TODO implement a times selector, for choosing what time is available for the clients to make a booking

  //TODO implement time range functionality
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>();
  const onTimeClick = (time: string): void => {
    onChange(time, componentType ? componentType : null);
    setSelectedTimeRange(time);
  };

  //TO DO loop over the avilable times only (available times will come from the backend)
  function getTimeOfDay(): Record<string, string[]> {
    const categorizedTimes: Record<string, string[]> = {
      morning: [],
      noon: [],
      afternoon: [],
    };

    const availableTimes: string[] = timeValues.filter(
      (timeValue) => bookedTimes?.indexOf(timeValue) !== -1
    );

    availableTimes.forEach((time) => {
      const hour = parseInt(time.split(':')[0], 10);
      if (hour >= 0 && hour < 12) {
        categorizedTimes.morning.push(time);
      }

      if (hour >= 12 && hour < 16) {
        categorizedTimes.noon.push(time);
      }

      if (hour > 16) {
        categorizedTimes.afternoon.push(time);
      }
    });

    return categorizedTimes;
  }

  return (
    <InputLabel label={''} required={required} errorMessage={errorMessage}>
      <div className="w-full grid gap-y-2">
        <div>
          <h2 className="text-sm font-semibold my-1">Morning</h2>
          <div className="flex gap-2 flex-wrap">
            {getTimeOfDay().morning.map((time, index) => (
              <div
                key={index}
                className={`border border-slate-200 rounded-lg p-2 text-sm cursor-pointer ${
                  selectedTimeRange === time && 'bg-sky-500 text-white'
                }`}
                onClick={() => onTimeClick(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold my-1">Noon</h2>
          <div className="flex gap-2 flex-wrap">
            {getTimeOfDay().noon.map((time, index) => (
              <div
                key={index}
                className={`border border-slate-200 rounded-lg p-2 text-sm cursor-pointer ${
                  selectedTimeRange === time && 'bg-sky-500 text-white'
                }`}
                onClick={() => onTimeClick(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold my-1">Afternoon</h2>
          <div className="flex gap-2 flex-wrap">
            {getTimeOfDay().afternoon.map((time, index) => (
              <div
                key={index}
                className={`border border-slate-200 rounded-lg p-2 text-sm cursor-pointer ${
                  selectedTimeRange === time && 'bg-sky-500 text-white'
                }`}
                onClick={() => onTimeClick(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>

      <InputError errorMessage={errorMessage} />
    </InputLabel>
  );
};
