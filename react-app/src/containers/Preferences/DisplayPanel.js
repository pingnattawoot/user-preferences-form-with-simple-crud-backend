import { connect } from 'react-redux';
import DisplayPanel from '../../components/Preferences/DisplayPanel';
import { updateUserDataRequest } from '../../actions/user';

const mapStateToProps = state => ({
  isSaving: state.user.isSaving,
  saveSuccess: state.user.saveSuccess,
});

export default connect(mapStateToProps, { updateUserDataRequest })(DisplayPanel);
