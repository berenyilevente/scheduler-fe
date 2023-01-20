import { Meta, Story } from '@storybook/react';
import { Card as CardComponent } from '@/components';

export default {
  title: 'Card/Card',
  component: CardComponent,
} as Meta;

const Template: Story = (args) => (
  <CardComponent {...args}>
    <div>Test content for the card</div>
  </CardComponent>
);

export const Card = Template.bind({});
Card.args = {};
