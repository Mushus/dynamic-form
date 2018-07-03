import * as React from 'react';
import { FormProperty, FormTypeText, AnyFormType, FormType } from '@/declare';
import TextForm from '@/components/textForm'
import TextareaForm from '@/components/textareaForm';
import NumberForm from '@/components/numberForm';
import GroupForm from '@/components/groupForm';
import DynamicForm from '@/components/dynamicForm';
import styled from 'styled-components';

export interface Props {
  label: string;
  name: string;
  form: AnyFormType;
}

export interface Handlers {
  onChange: (key: string, value: any) => void
}

export type State = Props & Handlers;

const ValiableForm = styled.div`
  margin-bottom: 15px;
`
const Label = styled.div`
  font-size: 0.75rem;
`

export default (state: State) => (
  <ValiableForm>
    <Label>{ state.label }:</Label>
    <div>
    { state.form.type == FormType.Text && <TextForm name={state.name} form={state.form} onChange={(key, value) => state.onChange(key, value)} />  }
    { state.form.type == FormType.Textarea && <TextareaForm name={state.name} form={state.form} onChange={(key, value) => state.onChange(key, value)} />  }
    { state.form.type == FormType.Number && <NumberForm name={state.name} form={state.form} onChange={(key, value) => state.onChange(key, value)}/>  }
    { state.form.type == FormType.Group && <GroupForm name={state.name} form={state.form} onChange={(key, value) => state.onChange(key, value)}/>  }
    { state.form.type == FormType.Dynamic && <DynamicForm name={state.name} form={state.form} onChange={(key, value) => state.onChange(key, value)}/>  }
    </div>
  </ValiableForm>
);
