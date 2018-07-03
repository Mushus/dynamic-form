import * as React from 'react';
import { FormTypeNumber } from '@/declare';

export interface Props {
  name: string;
  form: FormTypeNumber;
}

export interface Handlers {
  onChange: (key: string, value: number) => void
}

export type State = Props & Handlers;

export default (state: State) => (
  <input type="number" onChange={v => state.onChange(state.name, +v.target.value) } />
);
