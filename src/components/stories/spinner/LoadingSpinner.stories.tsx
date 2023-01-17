import { Meta, Story } from '@storybook/react';
import { LoadingSpinner as LoadingSpinnerComponent } from '@/components';

export default {
  title: 'Spinner/LoadingSpinner',
  component: LoadingSpinnerComponent,
} as Meta;

const Template: Story = (args) => (
  <LoadingSpinnerComponent {...args}></LoadingSpinnerComponent>
);

export const LoadingSpinner = Template.bind({});
LoadingSpinner.args = {};
