import React, {Component} from "react";
import {Button, Header, Menu} from 'semantic-ui-react';

class Nav extends Component{
    render(){
        return(
           
              <ul class="menu">
                <li class="first" title="Pocetna"><a href="/" class="home">Pocetna</a></li>
                <li class="second" title="Vasi obroci"><a href="/obroci" class="fa fa-th-list">Vasi obroci</a></li>
            </ul>  
           
            
        )
    }
}

export default Nav;