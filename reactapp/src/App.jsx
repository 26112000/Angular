
import './App.css';
import Masina from './Masina';
import Salut from './Salut';
let myVar = "LinkAcademy";
let myCar = { 
  name: "bmw",
  model : "g80",
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Salut {myVar}</h1>
        <Salut nume="Vizitator" curs="HTML"/>
        <Masina car={myCar}/>
      </header>
    </div>
  );
}

export default App;
