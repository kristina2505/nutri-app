import React from "react";

function Obrok({obrok, obrisiObrok}){

    function handleObrisiClick(){
        obrisiObrok(obrok.id);
    }

    return(
        <div style={{display: "flex"}}>
            <li
                style={{
                    color: "white",
                    backgroundColor: "black"
                }}
            >{obrok.hrana}  -  {obrok.kalorije} kcal</li>
            
            <button onClick={handleObrisiClick}>&#x232B;</button>
        </div>
    );
}

export default Obrok;