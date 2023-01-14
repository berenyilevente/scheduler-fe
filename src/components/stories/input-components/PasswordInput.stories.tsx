import { Meta, Story } from '@storybook/react';
import {
  PasswordInput as PasswordInputComponent,
  PasswordInputProps,
} from '../../input/input-components';

export default {
  title: 'Input/PasswordInput',
  component: PasswordInputComponent,
} as Meta;

const Template: Story<PasswordInputProps> = (args) => (
  <PasswordInputComponent {...args}></PasswordInputComponent>
);

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Password',
  required: false,
  errorMessage: '',
  onChange: (value) => console.log(value),
};
