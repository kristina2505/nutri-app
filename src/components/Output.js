import React from "react";
import Obrok from "./Obrok";

function Output({obroci, obrisiObrok}){
    return(
        <ul>
            {obroci.map(obrok=>(
                <Obrok key={obrok.id} obrok={obrok} obrisiObrok={obrisiObrok}/>
            ))}
        </ul>
    );
}

export default Output;