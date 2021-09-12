import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function ObrokForm({dodajObrok}){
    const[obrok, setObrok] = useState({
        id: "",
        hrana: "",
        kalorije: ""
    });
    
    function handleObrokIputChange(e){
        setObrok({...obrok, hrana: e.target.value});
    }

    function handleKalorijeInputChange(e){
        setObrok({...obrok, kalorije: e.target.value});
    }

    function handleDodajObrok(e){
        e.preventDefault();
        if(obrok.hrana.trim() && obrok.kalorije.trim()){
            dodajObrok({...obrok, id: uuidv4()});
        }
        setObrok({...obrok, hrana: "", kalorije: ""});
    }

    return(
        <form onSubmit={handleDodajObrok} class="forma">
            <div style={{display : "flex"}}>
                <label for="hrana">Obrok:</label>
                <input onChange={handleObrokIputChange} value={obrok.hrana} name="hrana" type="text" placeholder="Unesite obrok..."></input>
                
                </div>
                <div style={{display : "flex"}}>
                <label for="kalorije">Kalorijska vrednost:</label>
                <input onChange={handleKalorijeInputChange} value={obrok.kalorije} name="kalorije" type="number" placeholder="Unesite kalorije..."></input>
            </div>
            <button type="submit" class="dodajObrok">Dodaj obrok</button>
        </form>
    );
}

export default ObrokForm;