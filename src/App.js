import logo from './logo.svg';
import './App.css';

const employe = {
  backgroundColor: 'lightskyblue',
  padding: '0px 10px',
  borderRadius: '20px',
  border: '2px solid black',
  marginBottom: '10px'
}



function App() {
  const employes = [{ name: 'sofik alam', salary: 20000, address: 'Bonani' }, { name: 'riday hossain', salary: 20000, address: 'khilkhet' }]
  return (
    <div className="App">

      <Employee name={employes[0].name} salary={employes[0].salary}></Employee>
      <Employee></Employee>



    </div >
  );
}

function Employee(props) {

  return (
    <div style={employe}>
      <h2>Name :{props.name} </h2>
      <h5>Salary :{props.salary} </h5>
      <h5>Address :{props.address}</h5>
    </div>
  )
}




export default App;
