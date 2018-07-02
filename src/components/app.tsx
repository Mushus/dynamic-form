import * as React from 'react';
import { FormDefinition } from '@/declare';

export interface Props {
  formDefinition: FormDefinition;
}

export interface Handlers {
  handleInputDefinition: (text: string) => void
  handleUpdateDefinition: (text: string) => void
}

export type State = Props & Handlers;

export default (state: State) => (
  <div>
    <textarea value={state.formDefinition.text} onChange={ e => state.handleInputDefinition(e.target.value) } />
    <button onClick={() => state.handleUpdateDefinition(state.formDefinition.text)}>反映</button>
  </div>
);
