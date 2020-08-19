import React, { Component } from 'react'
import Todos from './Todos'
import Albums from './Albums'
import Posts from './Posts'
import Users from './Users'
import Comments from './Comments'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";
  export class App extends Component {
    render(props) {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link><br /></li>
                <li>  <Link to="/todos">Todos</Link></li>
                <li> <Link to="/albums">Albums</Link></li>
                <li> <Link to="/users">Users</Link></li>
                <li> <Link to="/posts">Posts</Link></li>
                <li> <Link to="/comments">Comments</Link></li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/todos">
              < Todos />
            </Route>
            <Route path="/albums/" >
              <Albums />
            </Route>
            <Route path="/users/" >
              <Users />
            </Route>
            <Route path="/posts/" >
              <Posts />
            </Route>
            <Route path="/comments/" >
              <Comments />
            </Route>
            {/* <Route path="/users/:userId"component={UserDetail}/>
         */}
          </Switch>

        </Router>
  
      
      )
    }
  }
export default App
