export interface FormDefinition {
  text: string;
  obj: any;
}

export interface State {
  formDefinition: FormDefinition;
}

export interface LogEntity {
  name: string;
  body: string;
}

export interface ChatLogState {
  [x: string]: LogEntity;
}

export const initialState: State = {
  formDefinition: {
    text: "{}",
    obj: {},
  },
};
