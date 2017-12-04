import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUp from '../../components/UserPages/SignUp';
import { signUpRequest } from '../../actions/user';

const mapStateToProps = ({ user }) => ({
  user,
});

export default withRouter(connect(
  mapStateToProps,
  { signUpRequest },
)(SignUp));
