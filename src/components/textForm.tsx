import * as React from 'react';
import { FormTypeText, FormTypeTextarea, FormValues } from '@/declare';

export interface Props {
  name: string;
  form: FormTypeText;
  values: FormValues;
}

export interface Handlers {
  onChange: (keys: (string | number)[], value: any) => void;
}

export type State = Props & Handlers;

export default function textForm(state: State) {
  return (
    <input
      type="text"
      value={state.values[state.name]}
      onChange={v => state.onChange([state.name], v.target.value)}
    />
  );
}
