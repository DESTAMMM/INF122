import React from "react";
import TableroB from "./TableroB";
import Historial from "./Historial";
import { useState } from "react";
function Juego(){
    /*2da modificacion simbol pa reconocer =(2m) -->*/const[historial,setHistorial]=useState([
        {cuadros: Array(9).fill(null)},
    ]);
    /*(2m)*/const[nroMovimiento,setNroMovimiento]=useState(0);
    const[cuadros, setCuadros]=useState(Array(9).fill(null));
    const[jugador,setJugador]=useState("X");
    const[ganador,setGanador]=useState(null);
    const click=(i)=>{
        const nuevoMovimiento=historial.slice(0,nroMovimiento+1);
        const movimientoActual=nuevoMovimiento[nuevoMovimiento.length-1];
        const cuadros=movimientoActual.cuadros.slice();
        /*(2m)*///const cuadrosTemp=[...cuadros];
        /*(2m)*//*if(cuadrosTemp[i]===null){
            cuadrosTemp[i]=jugador;
            setCuadros(cuadrosTemp);//devolviendo el nuevo array
            setJugador(jugador==="X" ? "O": "X");
        }
        if(calcularGanador(cuadrosTemp)!==null){
            setGanador(calcularGanador(cuadrosTemp));
        }*/
        /*(2m)*/if(cuadros[i]===null){
            cuadros[i]=jugador;
            setCuadros(cuadros);//devolviendo el nuevo array
            setJugador(jugador==="X" ? "O": "X");
            setHistorial(nuevoMovimiento.concat([{cuadros}]));
            setNroMovimiento(nuevoMovimiento.length);
        }
        /*(2m)*/if(calcularGanador(cuadros)!==null){
            setGanador(calcularGanador(cuadros));
        }
    }
    /*(2m)*/const saltarA=(movimiento)=>{
        setNroMovimiento(movimiento);
        setJugador(jugador === "X" ? "O" : "X");
    }
    const movimientoActual = historial[nroMovimiento];
    return(
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganador: ${ganador}` : `Próximo jugador: ${jugador}`}</h2>
                <TableroB cuadros={movimientoActual.cuadros} onClick={(i) => click(i)} />
            </div>
            <Historial historial={historial} saltarA={saltarA} />
        </div>
    );
}
function calcularGanador(cuadros){
    const lineas=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    for(let i=0;i<lineas.length;i++){
        const[a,b,c]=lineas[i];
        if(cuadros[a]&&cuadros[a]===cuadros[b]&&cuadros[a]===cuadros[c]){
            return cuadros[a];
        }
    }
    return null;
}
export default Juego;