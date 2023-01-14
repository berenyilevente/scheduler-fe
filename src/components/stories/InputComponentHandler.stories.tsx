import { Meta, Story } from '@storybook/react';
import { ComponentType } from '../../utils';
import {
  InputComponentHandler as InputComponentHandlerComponent,
  InputComponentHandlerProps,
} from '../input/input-component-handler/InputComponentHandler';

export default {
  title: 'Input/InputComponentHandler',
  component: InputComponentHandlerComponent,
} as Meta;

const Template: Story<InputComponentHandlerProps> = (args) => (
  <InputComponentHandlerComponent {...args}></InputComponentHandlerComponent>
);

export const InputComponentHandler = Template.bind({});
InputComponentHandler.args = {
  component: ComponentType.Calendar,
  onChange: (value) => console.log(value),
};
