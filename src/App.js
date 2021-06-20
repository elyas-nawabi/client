import React from "react";
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';




function App() {
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="posts" 
      list={PostList} 
      create={PostCreate}
      edit={PostEdit}
      icon={PostIcon}
      />
      <Resource name="users" 
      list={UserList} 
      create={UserCreate}
      edit={UserEdit}
      icon={UserIcon}
      />
    </Admin>
  );
}

export default App;
