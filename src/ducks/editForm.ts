import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import editForm, { Props, Handlers } from '@/components/editForm';
import { State as RootState } from '@/declare';
import { updateValueAction } from '@/ducks/app';

const mapStateToProps = ({
  formDefinition: {
    obj: { edit },
  },
  formValue,
}: RootState): Props => ({
  forms: edit,
  values: formValue,
});
const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleUpdateValue: (keys, value) =>
    dispatch(updateValueAction({ keys, value })),
});
export const EditForm = connect<Props, Handlers, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(editForm);
