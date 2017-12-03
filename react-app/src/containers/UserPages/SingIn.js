import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignIn from '../../components/UserPages/SignIn';
import { signInRequest } from '../../actions/user';

const mapStateToProps = ({ user }) => ({
  user,
});

export default withRouter(connect(
  mapStateToProps,
  { signInRequest },
)(SignIn));
