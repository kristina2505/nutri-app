import React from "react";
import Obrok from "./Obrok";

function Output({obroci, obrisiObrok}){
    return(
        <div className="outputContainer">
        <ul className="obrok">
            {obroci.map(obrok=>(
                <Obrok key={obrok.id} obrok={obrok} obrisiObrok={obrisiObrok}/>
            ))}
        </ul>
        </div>
    );
}

export default Output;