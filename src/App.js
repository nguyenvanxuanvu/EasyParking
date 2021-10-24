import { Component } from 'react';
import './App.css';
import BasicTable from './Components/Table/BasicTable';
import { PaginationTable } from './Components/Table/PaginationTable';
import RowSelection from './Components/Table/RowSelection' 
import SortingTable from './Components/Table/SortingTable' 

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="App">               
          <RowSelection />
      </div>
    );
  }
}
export default App;
