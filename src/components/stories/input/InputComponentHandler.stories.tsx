import { Meta, Story } from '@storybook/react';
import { InputType } from '@/utils';
import {
  InputComponentHandler as InputComponentHandlerComponent,
  InputComponentHandlerProps,
} from '@/components';

export default {
  title: 'Input/InputComponentHandler',
  component: InputComponentHandlerComponent,
} as Meta;

const Template: Story<InputComponentHandlerProps> = (args) => (
  <InputComponentHandlerComponent {...args}></InputComponentHandlerComponent>
);

export const InputComponentHandler = Template.bind({});
InputComponentHandler.args = {
  component: InputType.Calendar,
  onChange: (value) => console.log(value),
};
