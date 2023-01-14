import { Meta, Story } from '@storybook/react';
import {
  CalendarInput as CalendarInputComponent,
  CalendarInputProps,
} from '../../input/input-components';

export default {
  title: 'Input/CalendarInput',
  component: CalendarInputComponent,
} as Meta;

const Template: Story<CalendarInputProps> = (args) => (
  <CalendarInputComponent {...args}></CalendarInputComponent>
);

export const CalendarInput = Template.bind({});
CalendarInput.args = {
  onChange: (date) => console.log(date),
  label: 'Select date',
  required: false,
  errorMessage: '',
};
