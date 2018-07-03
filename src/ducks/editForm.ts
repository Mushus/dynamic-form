import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import editForm, { Props, Handlers } from '@/components/editForm';
import { State as RootState } from '@/declare';
import { updateValueAction } from '@/ducks/app';

const mapStateToProps = ({
  formDefinition: {
    obj: { edit },
  },
}: RootState): Props => ({
  forms: edit,
});
const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleUpdateValue: (key, value) =>
    dispatch(updateValueAction({ key, value })),
});
export const EditForm = connect<Props, Handlers, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(editForm);
