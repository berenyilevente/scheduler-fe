import { Meta, Story } from '@storybook/react';
import {
  LoadingSpinner as LoadingSpinnerComponent,
  LoadingSpinnerProps,
} from '@/components';

export default {
  title: 'Spinner/LoadingSpinner',
  component: LoadingSpinnerComponent,
} as Meta;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinnerComponent {...args}></LoadingSpinnerComponent>
);

export const LoadingSpinner = Template.bind({});
LoadingSpinner.args = {
  isLoading: true,
  size: 'small',
};
