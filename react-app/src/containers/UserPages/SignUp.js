import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUp from '../../components/UserPages/SignUp';
import { requestSignUp } from '../../actions/user';

export default withRouter(connect(null, { requestSignUp })(SignUp));
