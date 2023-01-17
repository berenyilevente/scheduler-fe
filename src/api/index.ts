import { InputArgs } from '@/utils';
import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchInputs = () => axios.get(`${url}/get-input`);

export const createInput = (inputField: InputArgs) =>
  axios.post(`${url}/post-input`, inputField);
