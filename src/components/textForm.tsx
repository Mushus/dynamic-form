import * as React from 'react';
import { FormTypeText, FormTypeTextarea } from '@/declare';

export interface Props {
  name: string;
  form: FormTypeText;
}

export interface Handlers {
  onChange: (key: string, value: string) => void
}

export type State = Props & Handlers;

export default (state: State) => (
  <input type="text" onChange={v => state.onChange(state.name, v.target.value) } />
);
