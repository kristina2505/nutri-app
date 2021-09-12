import React from "react";

function Obrok({obrok, obrisiObrok}){

    function handleObrisiClick(){
        obrisiObrok(obrok.id);
    }

    return(
        <div style={{display: "flex"}}>
            <li
                style={{
                    color: "white"
                }}
            >{obrok.hrana}  -  {obrok.kalorije} kcal</li>
            
            <button class="obrisiObrok" onClick={handleObrisiClick}>&#x232B;</button>
        </div>
    );
}

export default Obrok;