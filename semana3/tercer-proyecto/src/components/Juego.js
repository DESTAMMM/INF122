import React from "react";
import TableroB from "./TableroB";
import { useState } from "react";
function Juego(){
    const[cuadros, setCuadros]=useState(Array(9).fill(null));
    const[jugador,setJugador]=useState("X");
    function alHacerClick(i){

    }
    const click=(i)=>{
        const cuadrosTemp=[...cuadros];
        if(cuadrosTemp[i]===null){
            cuadrosTemp[i]=jugador;
            setCuadros(cuadrosTemp);//devolviendo el nuevo array
            setJugador(jugador==="X" ? "O": "X");
        }
    }
    return(
        <TableroB cuadros={cuadros} onClick={click}/>
    );
}
export default Juego;