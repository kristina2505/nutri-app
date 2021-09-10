import React, {useState} from "react";

function ObrokForm(){
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
    }

    return(
        <form>
            <div>
            <input onChange={handleObrokIputChange} value={obrok.hrana} name="hrana" type="text"></input>
            <input onChange={handleKalorijeInputChange} value={obrok.kalorije} name="kalorije" type="number"></input>
            </div>
            <button type="submit">Dodaj obrok</button>
        </form>
    );
}

export default ObrokForm;