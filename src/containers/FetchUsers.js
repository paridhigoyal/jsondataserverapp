import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import UserData from '../components/UserData';

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserData)