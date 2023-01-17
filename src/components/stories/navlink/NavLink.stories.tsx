import { Meta, Story } from '@storybook/react';
import { Icon, NavLink as NavLinkComponent, NavLinkProps } from '@/components';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Navigation/NavLink',
  component: NavLinkComponent,
} as Meta;

const Template: Story<NavLinkProps> = (args) => (
  <BrowserRouter>
    <NavLinkComponent {...args}></NavLinkComponent>
  </BrowserRouter>
);

export const NavLink = Template.bind({});
NavLink.args = {
  linkTo: '/settings',
  name: 'Settings',
  iconType: 'settings',
};
