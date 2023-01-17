import { Meta, Story } from '@storybook/react';
import { Icon as IconComponent, IconProps } from '@/components';

export default {
  title: 'Icon/Icon',
  component: IconComponent,
} as Meta;

const Template: Story<IconProps> = (args) => (
  <IconComponent {...args}></IconComponent>
);

export const Icon = Template.bind({});
Icon.args = {
  iconType: 'arrowDown',
};
