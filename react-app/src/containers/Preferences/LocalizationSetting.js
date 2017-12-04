import { connect } from 'react-redux';
import LocalizationSetting from '../../components/Preferences/LocalizationSetting';
import {
  updateLanguage,
  updateTimezone,
  updateCurrency,
} from '../../actions/user';

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, {
  updateLanguage,
  updateTimezone,
  updateCurrency,
})(LocalizationSetting);
