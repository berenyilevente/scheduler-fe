import { Meta, Story } from '@storybook/react';
import {
  SideNavBar as SideNavBarComponent,
  SideNavBarProps,
} from '@/components';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Navigation/SideNavBar',
  component: SideNavBarComponent,
} as Meta;

const Template: Story<SideNavBarProps> = (args) => (
  <BrowserRouter>
    <SideNavBarComponent {...args}></SideNavBarComponent>
  </BrowserRouter>
);

export const SideNavBar = Template.bind({});
SideNavBar.args = {
  isAuthenticated: true,
};
