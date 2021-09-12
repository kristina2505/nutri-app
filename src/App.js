import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { css, jsx } from "@emotion/react";
import './App.css'; 
import ObrokForm from './components/ObrokForm';
import Output from './components/Output';
import Nav from './components/Nav';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';
import Pocetna from './components/Pocetna';


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
    <div className="Stranica">
      <header className="App-header">
        <section className="App">
          <Nav />
          <div className="container">
            <BrowserRouter >
              <Switch>
              <Route exact path="/" component={Pocetna}></Route>
            
           
            <Route path="/obroci">
            <p class="unos">Unesite obrok:</p>
            <ObrokForm dodajObrok={dodajObrok}/>
            <Output obroci={obroci} obrisiObrok={obrisiObrok}/> 
            </Route>
            </Switch>
            </BrowserRouter>
          </div>
          
        </section>
        
      </header>
    </div>
  );
};




export default App;
