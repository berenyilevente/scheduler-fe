import { Card, Icon, Divider } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { getUserAction } from '@/redux/state/auth-state/authActions';
import { AppState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { t } from 'i18next';
import { TimeSelectorInput, Button } from '@/components';
import { timeValues } from '@/utils';
import {
  getWorkingHoursAction,
  postWorkingHoursAction,
} from '@/redux/state/settings-state/settingsActions';

export interface AdminProps {}

export const Admin: React.FC<AdminProps> = () => {
  const { userId } = useSelector((state: AppState) => state.auth);
  const { workingHours } = useSelector((state: AppState) => state.settings);
  const dispatch = useAppDispatch();

  const [workingHoursStart, setWorkingHoursStart] =
    useState<string | null>(null);
  const [workingHoursEnd, setWorkingHoursEnd] = useState<string | null>(null);

  function onWorkingHoursSave(): void {
    if (workingHoursStart === null || workingHoursEnd === null) {
      return;
    }
    const startIndex = timeValues.indexOf(workingHoursStart);
    const endIndex = timeValues.indexOf(workingHoursEnd);
    const workingHours: string[] = [];

    if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
      return;
    }

    for (let i = startIndex; i <= endIndex; i++) {
      workingHours.push(timeValues[i]);
    }

    dispatch(postWorkingHoursAction(workingHours));
  }

  useEffect(() => {
    dispatch(getUserAction(userId));
    dispatch(getWorkingHoursAction());
  }, []);

  console.log(workingHours);
  return (
    <div className="grid gap-y-4">
      <h2 className="text-2xl font-bold">{t('admin.title')}</h2>
      <div>
        <Card>
          <div className="flex flex-row gap-8 items-center">
            <Icon iconType="adminCard" />
            <p>{t('admin.description')}</p>
          </div>
        </Card>
      </div>
      <Divider />
      <div className="flex flex-col gap-y-2">
        <p>Set your working hours</p>
        <div className="flex justify-between gap-x-8">
          <TimeSelectorInput
            onChange={(value) => setWorkingHoursStart(value)}
          />
          <TimeSelectorInput onChange={(value) => setWorkingHoursEnd(value)} />
        </div>
        <div>
          <Button variant="filled" iconType="save" onClick={onWorkingHoursSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
