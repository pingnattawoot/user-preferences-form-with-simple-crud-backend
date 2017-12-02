import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment } from '../actions/counter';

const mapStateToProps = ({ counter }) => ({ counter });
export default connect(mapStateToProps, { increment })(Counter);
