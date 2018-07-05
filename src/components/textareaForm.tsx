import * as React from 'react';
import { FormTypeTextarea, FormValues } from '@/declare';

export interface Props {
  name: string;
  form: FormTypeTextarea;
  values: FormValues;
}

export interface Handlers {
  onChange: (keys: (string | number)[], value: any) => void;
}

export type State = Props & Handlers;

export default function textareaForm(state: State) {
  return (
    <textarea
      value={state.values[state.name]}
      onChange={v => state.onChange([state.name], v.target.value)}
    />
  );
}
