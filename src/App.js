import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css'; 
import ObrokForm from './components/ObrokForm';


function App() {
  const[obroci, setObroci]=useState([]);

  function dodajObrok(obrok){
    setObroci([obrok, ...obroci]);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>Unesite obrok:</p>
        <ObrokForm dodajObrok={dodajObrok}/>
      </header>
    </div>
  );
}

export default App;
