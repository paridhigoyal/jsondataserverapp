
import DeleteUser from './DeleteUser'
// import {deleteUser} from '../actions/index'
// import {connect} from 'react-redux'
import EditUser from './EditUser'
import AddUserData from './AddUserData'

import React, { Component } from 'react'

export class UserData extends Component {
   
    render() {

        const { users } = this.props
        console.log(users)
        return users.loading ?(
            <h2>loading</h2>):users.error ?(<h2> {users.error}</h2>):(
       
       <ul><AddUserData /><h2>User</h2>{ users && users.users && users.users.map((value,index) => (
                <li key={index}>    
                
                  Id : {value.id}<br/>
                  Name:{value.name}<br />
                 Username : {value.username}<br/>
                 Email:{value.email}<br/>
                 <h4>Address:</h4>
                 
                 Street:{value.address && value.address.street}<br/>
                 Suite:{value.address && value.address.suite}<br/>
                 City:{value.address && value.address.city}<br/>
                 Zipcode:{value.address && value.address.zipcode}<br/>
        
                 Latitude:{value.address && value.address.geo && value.address.geo.lat}<br/>
                 Longitude:{value.address && value.address.geo && value.address.geo.lng}<br/>
                 Phone:{ value.phone}<br/>
                 Website:{value.website}<br/>
                 <h4>Company:</h4>
                 Name:{value.company && value.company.name}<br/>
                 CatchPhrase:{value.company && value.company.catchPhrase}<br/>
                 Bs:{value.company && value.company.bs}
                 <br />
                 <DeleteUser id={value.id}/>
                 <EditUser value={value}/>
                 {/* <button onClick={this.props.DeleteUser(value.id)}>Delete</button> */}
                 {/* <button onClick={()=>updateUserData(value)}>Update</button> */}
                {/* <button onClick={this.showUser(value.id)}> User Detail</button> */}
    
                </li>  
    
              ))
            
            
            }
      </ul>
     );
    }
}


export default UserData
   