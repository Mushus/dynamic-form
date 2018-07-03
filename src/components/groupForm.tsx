import * as React from 'react';
import { FormTypeGroup } from '@/declare';
import VariableForm from '@/components/variableForm';
import styled from 'styled-components';

export interface Props {
  name: string;
  form: FormTypeGroup;
}

export interface Handlers {
  onChange: (key: string, value: any) => void
}

export type State = Props & Handlers;

const GroupForm = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
`

export default (state: State): any => (
  <GroupForm>
      { state.form.properties.map(v => <div key={v.name}>
        <VariableForm onChange={(key, value) => state.onChange(`${state.name}.${key}`, value)} label={v.label} name={v.name} form={v.form} />
      </div>) }
  </GroupForm>
);
