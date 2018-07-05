import * as React from 'react';
import { FormTypeGroup, FormValues } from '@/declare';
import VariableForm from '@/components/variableForm';
import styled from 'styled-components';

export interface Props {
  name: string;
  form: FormTypeGroup;
  values: FormValues;
}

export interface Handlers {
  onChange: (keys: (string | number)[], value: any) => void;
}

export type State = Props & Handlers;

const GroupForm = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
`;

export default function groupForm(state: State): any {
  return (
    <GroupForm>
      {state.form.properties.map(v => (
        <div key={v.name}>
          <VariableForm
            label={v.label}
            name={v.name}
            form={v.form}
            values={state.values}
            onChange={(keys, value) =>
              state.onChange([state.name, ...keys], value)
            }
          />
        </div>
      ))}
    </GroupForm>
  );
}
