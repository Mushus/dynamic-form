import * as React from 'react';
import { FormProperty } from '@/declare';
import VariableForm from '@/components/variableForm';
import styled from 'styled-components';

export interface Props {
  forms: FormProperty[];
}

export interface Handlers {
  handleUpdateValue: (key: string, value: any) => void;
}

export type State = Props & Handlers;

const EditForm = styled.div`
  padding: 30px;
  border: 1px solid #ddd;
`

export default (state: State) => (
  <EditForm>
    <div>
      { state.forms.map(v => <div key={v.name}>
        <VariableForm onChange={(key, value) => state.handleUpdateValue(key, value as any)} label={v.label} name={v.name} form={v.form} />
      </div>) }
    </div>
    <button>決定</button>
  </EditForm>
);
