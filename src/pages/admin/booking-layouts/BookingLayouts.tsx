import {
  DropdownInput,
  TextInput,
  SwitchInput,
  Button,
  InputComponentHandler,
  LoadingSpinner,
  Icon,
  NavLink,
  Card,
} from '@/components';
import { dropdownInputOptions, GetInputArgs, RouteUrl } from '@/utils';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { DeleteInputModal } from './components/delete-input-modal/DeleteInputModal';

export interface BookingLayoutsProps {}

export const BookingLayouts: React.FC<BookingLayoutsProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function navigateSettings() {
    navigate(`${RouteUrl.BookingLayouts}/${RouteUrl.InputSettings}`);
  }

  return (
    <div className="grid gap-y-4 ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{t('bookingLayouts.myLayouts')}</h2>
        <Button variant="filled" size="medium">
          Create layout
        </Button>
      </div>
      <Card>
        <div className="grid gap-y-3 p-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Test booking layout</p>
            <Icon iconType="settings" onClick={navigateSettings}></Icon>
          </div>
          <div>
            <p>Info 1</p>
            <p>Info 1</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
