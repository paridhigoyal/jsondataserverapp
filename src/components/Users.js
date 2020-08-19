import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from "../actions/index";
import FetchUsers from '../containers/FetchUsers'
export class Users extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (<div>
            <FetchUsers/>
        </div>

        );
    }
}

export default connect(
    null,
    { fetchUsers }
)(Users);
