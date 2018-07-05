import * as React from 'react';
import { FormTypeNumber, FormValues } from '@/declare';

export interface Props {
  name: string;
  form: FormTypeNumber;
  values: FormValues;
}

export interface Handlers {
  onChange: (keys: (string | number)[], value: any) => void;
}

export type State = Props & Handlers;

export default function munberForm(state: State) {
  return (
    <input
      type="number"
      value={state.values[state.name]}
      onChange={v => state.onChange([state.name], +v.target.value)}
    />
  );
}
