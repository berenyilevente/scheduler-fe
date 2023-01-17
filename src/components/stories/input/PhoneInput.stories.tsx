import { Meta, Story } from '@storybook/react';
import {
  PhoneInput as PhoneInputComponent,
  PhoneInputProps,
} from '@/components';

export default {
  title: 'Input/PhoneInput',
  component: PhoneInputComponent,
} as Meta;

const Template: Story<PhoneInputProps> = (args) => (
  <PhoneInputComponent {...args}></PhoneInputComponent>
);

export const PhoneInput = Template.bind({});
PhoneInput.args = {
  label: 'Phone number',
  required: false,
  errorMessage: '',
  onChange: (value) => console.log(value),
};
