import * as React from 'react';
import { FormTypeGroup, FormTypeDynamic } from '@/declare';
import VariableForm from '@/components/variableForm';
import styled from 'styled-components';

export interface Props {
  name: string;
  form: FormTypeDynamic;
}

export interface Handlers {
  onChange: (key: string, value: any) => void
}

export type State = Props & Handlers;

const DynamicForm = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
`

export default (state: State): any => (
  <DynamicForm>
    <div>
      { state.form.formAssets.map(v => <button key={v.property.name}>{v.property.label}</button>)}
    </div>
  </DynamicForm>
);
