import { Meta, Story } from '@storybook/react';
import { TextInput as TextInputComponent, TextInputProps } from '@/components';

export default {
  title: 'Input/TextInput',
  component: TextInputComponent,
} as Meta;

const Template: Story<TextInputProps> = (args) => (
  <TextInputComponent {...args}></TextInputComponent>
);

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'Text input',
  required: false,
  errorMessage: '',
  onChange: (value) => console.log(value),
};
0;
