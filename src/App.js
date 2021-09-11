import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css'; 
import ObrokForm from './components/ObrokForm';
import Output from './components/Output';

const LOCAL_STORAGE_KEY="aplikacija-rjs-obroci";

function App() {
  const[obroci, setObroci]=useState([]);

  useEffect(()=>{
    const storageObroci=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageObroci){
      setObroci(storageObroci);
    }
  }, []);
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obroci));
  }, [obroci]);

  function dodajObrok(obrok){
    setObroci([obrok, ...obroci]);
  }

  function obrisiObrok(id){
    setObroci(obroci.filter(obrok=> obrok.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>Unesite obrok:</p>
        <ObrokForm dodajObrok={dodajObrok}/>
        <Output obroci={obroci} obrisiObrok={obrisiObrok}/>
      </header>
    </div>
  );
}

export default App;
