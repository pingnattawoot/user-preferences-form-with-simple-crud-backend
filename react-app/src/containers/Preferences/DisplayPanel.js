import { connect } from 'react-redux';
import DisplayPanel from '../../components/Preferences/DisplayPanel';
import { updateUserDataRequest } from '../../actions/user';

export default connect(null, { updateUserDataRequest })(DisplayPanel);
