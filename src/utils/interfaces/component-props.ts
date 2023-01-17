export interface InputProps {
  email: string;
  calendar: string;
  dropdown: string;
  password: string;
  switch: string;
  text: string;
  timepicker: string;
}

export interface DropdownOption {
  id?: string;
  value: string;
}

export interface InputArgs {
  inputType: string;
  label: string;
  required: boolean;
}
