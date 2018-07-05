import * as React from 'react';
import { FormProperty, FormValues } from '@/declare';
import VariableForm from '@/components/variableForm';
import styled from 'styled-components';

export interface Props {
  forms: FormProperty[];
  values: FormValues;
}

export interface Handlers {
  handleUpdateValue: (keys: (string | number)[], value: any) => void;
}

export type State = Props & Handlers;

const EditForm = styled.div`
  padding: 30px;
  border: 1px solid #ddd;
`;

export default function editForm(state: State) {
  return (
    <EditForm>
      <div>
        {state.forms.map(v => (
          <div key={v.name}>
            <VariableForm
              label={v.label}
              name={v.name}
              form={v.form}
              values={state.values}
              onChange={(keys, value) =>
                state.handleUpdateValue(keys, value as any)
              }
            />
          </div>
        ))}
      </div>
      <button>決定</button>
    </EditForm>
  );
}
