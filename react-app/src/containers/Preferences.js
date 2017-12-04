import { connect } from 'react-redux';
import Preferences from '../components/Preferences';

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Preferences);
