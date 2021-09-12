import React, {Component} from "react";

class Pocetna extends Component{
    render(){
        return(
            <div className="pocetna">
                <h1>Nutri fit</h1>
                <h2>Dobro došli!</h2>
                <p> Ovo je mesto gde možete voditi evidenciju o Vašem dnevnom unosu kalorija. </p>
                <p  style={{color: "goldenrod"}}>Zdrava ishrana je baza zdravog života. </p>
                <p  style={{color: "goldenrod"}}>Ukoliko ste nekada u životu primenjivali određene zdrave navike</p>
                <p  style={{color: "goldenrod"}}> zarad boljeg osećaja u organizmu, pri tom ne pazeći šta jedete,</p>
                <p  style={{color: "goldenrod"}}> onda ste sasvim sigurno shvatili kako nedostatak pravilne ishrane ne može baš ništa da nadomesti.</p>
            </div>
        )
    }
}

export default Pocetna;