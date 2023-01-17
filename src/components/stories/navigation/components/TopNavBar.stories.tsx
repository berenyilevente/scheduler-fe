import { Meta, Story } from '@storybook/react';
import { TopNavBar as TopNavBarComponent, TopNavBarProps } from '@/components';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Navigation/TopNavBar',
  component: TopNavBarComponent,
} as Meta;

const Template: Story<TopNavBarProps> = (args) => (
  <BrowserRouter>
    <TopNavBarComponent {...args}></TopNavBarComponent>
  </BrowserRouter>
);

export const TopNavBar = Template.bind({});
TopNavBar.args = {
  isAuthenticated: true,
};
