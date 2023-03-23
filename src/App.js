import { useSelector } from 'react-redux';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Employee from './components/Employee';

function App() {
  const employeeList = useSelector(state => state.employeeList)
  const { loading } = employeeList;
  return (
    <div className="App">
      <AddEmployee />
      {loading &&
        <div>
          <h2 style={{ "color": "red" }}>Loading...</h2>
        </div>
      }
      <Employee />
    </div>
  );
}

export default App;
