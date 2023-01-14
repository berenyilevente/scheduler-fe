import { Meta, Story } from '@storybook/react';
import {
  EmailInput as EmailInputComponent,
  EmailInputProps,
} from '../../input/input-components';

export default {
  title: 'Input/EmailInput',
  component: EmailInputComponent,
} as Meta;

const Template: Story<EmailInputProps> = (args) => (
  <EmailInputComponent {...args}></EmailInputComponent>
);

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email',
  required: false,
  errorMessage: '',
  onChange: (value) => console.log(value),
};
