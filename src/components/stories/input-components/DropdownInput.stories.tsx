import { Meta, Story } from '@storybook/react';
import {
  DropdownInput as DropdownComponent,
  DropdownProps,
} from '../../input/input-components';
import { DropdownOption } from '../../../utils';

export default {
  title: 'Input/DropdownInput',
  component: DropdownComponent,
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <DropdownComponent {...args}></DropdownComponent>
);
const options: DropdownOption[] = [
  {
    id: '1',
    value: 'Option 1',
  },
  {
    id: '2',
    value: 'Option 2',
  },
  {
    id: '3',
    value: 'Option 3',
  },
];
const handleOptionChange = (option: string) => console.log(option);

export const DropdownInput = Template.bind({});
DropdownInput.args = {
  options: options,
  value: options[0].value,
  onChange: handleOptionChange,
  label: 'Please select',
  required: false,
  errorMessage: '',
};
