import { actionCreatorFactory } from 'typescript-fsa';
import { upcastingReducer } from 'typescript-fsa-reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import app, { State, Props, Handlers } from '@/components/app';
import { State as RootState } from '@/declare';

const actionCreator = actionCreatorFactory();

// payload
interface InputDefinitionPayload {
  text: string;
}
interface UpdateDefinitionPayload {
  obj: any;
}

// actionType

export enum ActionType {
  // 定義を入力する
  InputDefinition = 'INPUT_DEFINITION',
  // 定義を反映する
  UpdateDefinition = 'UPDATE_DEFINITION',
}

// action
export const inputDefinitionAction = actionCreator<InputDefinitionPayload>(
  ActionType.InputDefinition
);
export const updateDefinitionAction = actionCreator<UpdateDefinitionPayload>(
  ActionType.UpdateDefinition
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
  }
})
export const updateDefinitionHandler = (
  state: RootState,
  { obj }: UpdateDefinitionPayload
): RootState => ({
  ...state,
  formDefinition: {
    ...state.formDefinition,
    obj
  }
})

// reducer

export const reducer = upcastingReducer<RootState, RootState>()
  .case(inputDefinitionAction, inputDefinitionHandler)
  .case(updateDefinitionAction, updateDefinitionHandler);

const mapStateToProps = ({ formDefinition }: RootState): Props => ({
  formDefinition,
});
const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleInputDefinition: text => {
    dispatch(inputDefinitionAction({ text }))
  },
  handleUpdateDefinition: text => {
    try {
      dispatch(updateDefinitionAction({
        obj: JSON.parse(text)
      }))
    } catch(e) {
      alert('構文エラー')
    }
  },
});
export const App = connect<Props, Handlers, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(app);
