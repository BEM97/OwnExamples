import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddpostForm } from './features/posts/AddpostForm'
import {PostsList} from './features/posts/PostsList'
import {SinglePostPage} from './features/posts/SinglePostPage'
import {EditPostForm} from './features/posts/EditPostForm'
import { UserList } from './features/users/UserList'
import { UserPage } from './features/users/UserPage'
import {NotificationsList} from './features/notifications/NotificationsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
              <AddpostForm/>
              <PostsList/>
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage}/>
         <Route exact path="editPost/:postId" component={EditPostForm}/>
        <Route exact path="/users" component={UserList}/>
        <Route exact path="/users/:userId" component={UserPage}/>
        <Route exact path="/notifications" component={NotificationsList}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
