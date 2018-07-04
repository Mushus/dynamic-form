import { actionCreatorFactory } from 'typescript-fsa';
import { upcastingReducer } from 'typescript-fsa-reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import app, { Props, Handlers } from '@/components/app';
import { State as RootState, FormDefinition } from '@/declare';
import { updateFormStructure } from '@/ducks/formValue';

const actionCreator = actionCreatorFactory();

// payload
interface InputDefinitionPayload {
  text: string;
}
interface UpdateDefinitionPayload {
  obj: any;
}
interface UpdateValuePayload {
  key: string;
  value: any;
}

// actionType
export enum ActionType {
  // 定義を入力する
  InputDefinition = 'INPUT_DEFINITION',
  // 定義を反映する
  UpdateDefinition = 'UPDATE_DEFINITION',
  // 値を更新する
  UpdateValue = 'UPDATE_VALUE',
}

// action
export const inputDefinitionAction = actionCreator<InputDefinitionPayload>(
  ActionType.InputDefinition
);
export const updateDefinitionAction = actionCreator<UpdateDefinitionPayload>(
  ActionType.UpdateDefinition
);
export const updateValueAction = actionCreator<UpdateValuePayload>(
  ActionType.UpdateValue
);

// handler
export const inputDefinitionHandler = (
  state: RootState,
  { text }: InputDefinitionPayload
): RootState => ({
  ...state,
  formDefinition: {
    ...state.formDefinition,
    text,
  },
});
export const updateDefinitionHandler = (
  state: RootState,
  { obj }: UpdateDefinitionPayload
): RootState => ({
  ...state,
  formDefinition: {
    ...state.formDefinition,
    obj,
  },
  formValue: updateFormStructure(obj, state.formValue),
});
export const updateValueHandler = (
  state: RootState,
  { key, value }: UpdateValuePayload
): RootState => ({
  ...state,
  formValue: {
    ...state.formValue,
    [key]: value,
  },
});

// reducer

export const reducer = upcastingReducer<RootState, RootState>()
  .case(inputDefinitionAction, inputDefinitionHandler)
  .case(updateDefinitionAction, updateDefinitionHandler)
  .case(updateValueAction, updateValueHandler);

const mapStateToProps = ({ formDefinition, formValue }: RootState): Props => ({
  formDefinition,
  formValue,
});
const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleInputDefinition: text => {
    dispatch(inputDefinitionAction({ text }));
  },
  handleUpdateDefinition: text => {
    try {
      dispatch(
        updateDefinitionAction({
          obj: JSON.parse(text),
        })
      );
    } catch (e) {
      alert('構文エラー');
    }
  },
});

export const App = connect<Props, Handlers, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(app);
