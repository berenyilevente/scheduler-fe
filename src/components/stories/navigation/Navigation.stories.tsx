import { Meta, Story } from '@storybook/react';
import {
  Navigation as NavigationComponent,
  NavigationProps,
} from '@/components';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Navigation/Navigation',
  component: NavigationComponent,
} as Meta;

const Template: Story<NavigationProps> = (args) => (
  <BrowserRouter>
    <NavigationComponent {...args}>
      <div className="grid gap-y-4">
        <div className="text-3xl font-bold underline">Welcome to scheduler</div>
        <div className="grid grid-cols-1 gap-y-5">
          <h2 className="text-2xl font-bold">Create input fields</h2>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
          <h2 className="text-2xl font-bold">My input fields</h2>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
        </div>
      </div>
    </NavigationComponent>
  </BrowserRouter>
);

export const Navigation = Template.bind({});
Navigation.args = {};
