import { Meta, Story } from '@storybook/react';
import {
  SwitchInput as SwitchInputComponent,
  SwitchInputProps,
} from '../input/input-components';

export default {
  title: 'Input/SwitchInput',
  component: SwitchInputComponent,
} as Meta;

const Template: Story<SwitchInputProps> = (args) => (
  <SwitchInputComponent {...args}></SwitchInputComponent>
);

export const SwitchInput = Template.bind({});
SwitchInput.args = {
  onChange: (toggled) => console.log(toggled),
};
