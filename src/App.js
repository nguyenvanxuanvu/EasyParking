//import { Component } from 'react';
// import BasicTable from './Components/Table/BasicTable';
// import { PaginationTable } from './Components/Table/PaginationTable';
// import RowSelection from './Components/Table/RowSelection' 
// import SortingTable from './Components/Table/SortingTable'
//import Button from './Components/accInt/Button'
//import Button from './Components/accInt/Button';
import ForgetPass from './Components/accInt/ForgetPass';
import Header from './Components/accInt/Header'
import Register from './Components/accInt/Register';
import Login from './Components/accInt/Login';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {

  return (
    <div>
      <Header />
      {/* <Login /> */}
      {/* <ForgetPass /> */}
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/forgetPass'>
          <ForgetPass />
        </Route>
      </Switch>

    </div>
  );

}
export default App;
