import { Meta, Story } from '@storybook/react';
import {
  TimepickerInput as TimepickerInputComponent,
  TimepickerInputProps,
} from '../../input/input-components';

export default {
  title: 'Input/TimepickerInput',
  component: TimepickerInputComponent,
} as Meta;

const Template: Story<TimepickerInputProps> = (args) => (
  <TimepickerInputComponent {...args}></TimepickerInputComponent>
);

export const TimepickerInput = Template.bind({});
TimepickerInput.args = {
  label: 'Timepicker',
  required: false,
  errorMessage: '',
  onChange: (time) => console.log(time),
};
