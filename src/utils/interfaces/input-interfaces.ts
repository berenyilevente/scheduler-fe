export interface InputProps {
  email: string;
  calendar: string;
  dropdown: string;
  password: string;
  switch: string;
  text: string;
  timepicker: string;
}

export interface PostInputArgs {
  inputType: string;
  label: string;
  required: boolean;
}

export interface GetInputArgs {
  _id: string;
  inputType: string;
  label: string;
  required: boolean;
}
