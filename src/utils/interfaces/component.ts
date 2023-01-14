export interface InputComponent {
  email: 'email';
  calendar: 'calendar';
  dropdown: 'dropdown';
  password: 'password';
  switch: 'switch';
  text: 'text';
  timepicker: 'timepicker';
}

export interface DropdownOption{
  id: string,
  value: string
}