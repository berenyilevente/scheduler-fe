import { Meta, Story } from '@storybook/react';
import { Calendar as CalendarComponent } from '@/components';

export default {
  title: 'Calendar/Calendar',
  component: CalendarComponent,
} as Meta;

const Template: Story = (args) => (
  <CalendarComponent {...args}>
    <div>Test content for the Calendar</div>
  </CalendarComponent>
);

export const Calendar = Template.bind({});
Calendar.args = {};
