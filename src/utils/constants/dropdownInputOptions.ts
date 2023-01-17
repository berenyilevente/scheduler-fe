import { InputComponent } from '../enums/input-component';
import { DropdownOption } from '../interfaces/component-props';

export const dropdownInputOptions: DropdownOption[] = [
  { value: InputComponent.Email },
  { value: InputComponent.Calendar },
  { value: InputComponent.Dropdown },
  { value: InputComponent.Password },
  { value: InputComponent.Phone },
  { value: InputComponent.Switch },
  { value: InputComponent.Text },
  { value: InputComponent.Timepicker },
];
