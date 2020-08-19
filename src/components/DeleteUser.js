import { connect } from "react-redux";
import {deleteUser} from '../actions/index'
import React from 'react'

const DeleteUser=(id)=>{ 
    // console.log(id)
return(<button onClick={()=>deleteUser(id)}>Delete</button> )
}

export default connect(null,{deleteUser})(DeleteUser)