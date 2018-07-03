import * as React from 'react';
import { FormTypeTextarea } from '@/declare';

export interface Props {
  name: string;
  form: FormTypeTextarea;
}

export interface Handlers {
  onChange: (key: string, value: string) => void
}

export type State = Props & Handlers;

export default (state: State) => (
  <textarea onChange={v => state.onChange(state.name, v.target.value) } />
);
