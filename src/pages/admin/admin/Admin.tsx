import { Card, Icon, Divider } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { getUserAction } from '@/redux/state/auth-state/authActions';
import { AppState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

export interface AdminProps {}
export const Admin: React.FC<AdminProps> = () => {
  const { apiKey, userId } = useSelector((state: AppState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserAction(userId));
  }, []);

  console.log(userId);
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

      <div>
        <Card>
          <h2 className="text-lg font-semibold">My api key</h2>
          <div className="border border-slate-100 p-4 rounded-md my-4 flex gap-x-4 items-center">
            <Icon iconType="password"></Icon>
            <p>{apiKey}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
