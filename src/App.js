import logo from './logo.svg';
import './App.css';

const employe = {
  backgroundColor: 'lightskyblue',
  padding: '0px 10px',
  borderRadius: '20px',
  border: '2px solid black',
  marginBottom: '10px'
}
const person = {
  backgroundColor: 'lightcyan',
  padding: '0px 10px',
  borderRadius: '20px',
  border: '2px solid black',
  marginBottom: '10px'
}



function App() {
  const employes = [{ name: 'sofik alam', salary: 20000, address: 'Bonani' }, { name: 'riday hossain', salary: 20000, address: 'khilkhet' }, { name: 'sohel', salary: 40000, address: 'Gulshan' }, { name: 'choudhuri', salary: 10000, address: 'Farmgate' }]
  const nayok = ['Rubel', 'BappaRaz', 'Kuber', 'Joshim Vai']
  return (
    <div className="App">

      <Employee name={employes[0].name} salary={employes[0].salary} address={employes[0].address}></Employee>
      <Employee name={employes[1].name} salary={employes[1].salary} address={employes[1].address}></Employee>
      <Employee name={employes[2].name} salary={employes[2].salary} address={employes[2].address}></Employee>
      <Employee name={employes[1].name} salary={employes[1].salary} address={employes[1].address}></Employee>

      <Person name={nayok[0]} nayika="moushumi"></Person>
      <Person name={nayok[1]} nayika="cheka"></Person>
      <Person name={nayok[2]} nayika="Kppila"></Person>


    </div >
  );
}

function Employee(props) {

  return (
    <div style={employe}>
      <h2>Name : {props.name} </h2>
      <h5>Salary : {props.salary} </h5>
      <h5>Address : {props.address}</h5>
    </div>
  )
}


function Person(props) {
  return (
    <div style={person}>
      <h2>Name : {props.name}</h2>
      <h5>Nayika : {props.nayika}</h5>
    </div>
  )
}




export default App;
