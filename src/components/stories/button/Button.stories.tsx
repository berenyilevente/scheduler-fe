import { Meta, Story } from '@storybook/react';
import { Button as ButtonComponent, ButtonProps } from '@/components';

export default {
  title: 'Button/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ButtonComponent {...args}>Button</ButtonComponent>
);

export const Button = Template.bind({});
Button.args = {};
