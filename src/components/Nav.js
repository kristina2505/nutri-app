import React, {Component} from "react";
import {Button, Header, Menu} from 'semantic-ui-react';

class Nav extends Component{
    render(){
        return(
           
              <ul class="menu">
                <li class="first" title="Pocetna"><a href="/" class="home">Početna</a></li>
                <li class="second" title="Vasi obroci"><a href="/obroci" >Vaši obroci</a></li>
            </ul>  
           
            
        )
    }
}

export default Nav;