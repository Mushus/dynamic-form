import * as React from 'react';
import { FormDefinition } from '@/declare';
import { EditForm } from '@/ducks/editForm';
import styled from 'styled-components';

export interface Props {
  formDefinition: FormDefinition;
  formValue: any;
}

export interface Handlers {
  handleInputDefinition: (value: any) => void;
  handleUpdateDefinition: (text: string) => void;
}

export type State = Props & Handlers;

const DefinitionEditor = styled.div`
  margin-bottom: 15px;
`;
const Editor = styled.textarea`
  box-sizing: border-box;
  border: 1px solid #ddd;
  height: 400px;
  width: 100%;
  display: box;
  resize: none;
  tab-size: 2;
`;

const EditorWrapper = styled.div`
  margin-bottom: 15px;
`;

const DataView = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;
  margin-bottom: 15px;
`;

const KeyHeader = styled.td`
  padding: 5px;
  background-color: #e8e8e8;
  font-size: 0.75px;
  width: 200px;
`;
const ValueHeader = styled.td`
  padding: 5px;
  background-color: #e8e8e8;
  font-size: 0.75px;
`;

const DataRow = styled.tr`
  border: 1px solid #eee;
`;
const Column = styled.td`
  padding: 5px;
  font-size: 0.75px;
  white-space: pre;
  border: 1px solid #eee;
`;

export default function app(state: State) {
  return (
    <div>
      <DefinitionEditor>
        <Editor
          value={state.formDefinition.text}
          onChange={e => state.handleInputDefinition(e.target.value)}
        />
        <button
          onClick={() =>
            state.handleUpdateDefinition(state.formDefinition.text)
          }
        >
          反映
        </button>
      </DefinitionEditor>
      <div>プレビュー:</div>
      <EditorWrapper>
        <EditForm />
      </EditorWrapper>
      <div>値:</div>
      <DataView>
        <DataRow>
          <KeyHeader>key</KeyHeader>
          <ValueHeader>value</ValueHeader>
        </DataRow>
        {Object.entries(state.formValue).map(([key, value]: [string, any]) => (
          <DataRow key={key}>
            <Column>{key}</Column>
            <Column>{value}</Column>
          </DataRow>
        ))}
      </DataView>
    </div>
  );
}
