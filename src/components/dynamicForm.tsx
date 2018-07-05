import * as React from 'react';
import { FormTypeGroup, FormTypeDynamic, FormValues } from '@/declare';
import styled from 'styled-components';
import VariableForm from '@/components/variableForm';

export interface Props {
  name: string;
  form: FormTypeDynamic;
  values: FormValues;
}

export interface Handlers {
  onChange: (keys: (string | number)[], value: any) => void;
}

export type State = Props & Handlers;

const DynamicForm = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
`;

export default function dynamicForm(state: State) {
  return (
    <DynamicForm>
      <div>
        {state.values.map((v: any) => (
          <div key={v.name}>
            <VariableForm
              label={v.label}
              name={v.name}
              form={v.form}
              values={state.values}
              onChange={(keys, value) =>
                state.onChange([...keys, 0], value as any)
              }
            />
          </div>
        ))}
      </div>
      <div>
        {state.form.formAssets.map(v => (
          <button
            key={v.property.name}
            onClick={() => {
              v.property.form;
            }}
          >
            {v.property.label}
          </button>
        ))}
      </div>
    </DynamicForm>
  );
}
