import logo from './logo.svg';
import './App.css';


const employes = {
  backgroundColor: 'lightskyblue',
  padding: '10px',
  margin: '10px 0px',
  borderRadius: '20px',
  border: '2px solid black'
}
const Player = {
  backgroundColor: 'lightcyan',
  padding: '10px',
  margin: '10px 0px',
  borderRadius: '20px',
  border: '2px solid black'
}

function App() {
  return (
    <div className="App">
      <Employee name="kolur bolod" age="34" designation="Marketing Officer"></Employee>

      <Employee name="Kopila shundori" age="30" designation="HR"></Employee>
      <Players name="Pa-ponda" profession="crickter"></Players>
      


    </div >
  );
}


function Players(props) {
  console.log(props)
  return (
    <div style={Player} className='person'>
      <h1>Name : {props.name}</h1>
      <p>professtion : {props.profession}</p>
    </div>
  )
}


function Employee(props) {
  console.log(props)
  return (
    <div style={employes} className='emoployes'>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Designation:{props.designation}</p>
    </div>
  )
}

function Friends() {
  return (

    <div>
      <h1>Name : shorif</h1>
      <p>Address : keranigonj</p>
    </div>
  )
}



export default App;
