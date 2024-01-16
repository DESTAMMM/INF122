import React from "react";
import Cuadro from "./Cuadro";
import '../styles/Tablero.css';
import { useState } from "react";
function Tablero(){
    const[cuadros, setCuadros]=useState(Array(9).fill(null));
    const[jugador,setJugador]=useState("O");
    //const [valor,setValor]=useState("X");
    const click=(i)=>{
        const cuadrosTemp=[...cuadros];
        if(cuadrosTemp[i]===null){
            cuadrosTemp[i]=jugador;
            setCuadros(cuadrosTemp);
            setJugador(jugador==="X" ? "O": "X");
        }
        /*if(valor==="X"){
            setValor("O");
        }else{
            setValor("X");
        }*/
        //esto es equvalente a esto: setValor(valor==="X" ? setValor("O"): setValor("X"));
    }
    return (
        <div className="juego">
            <h1>Siguiente Jugador:{jugador}</h1>
            <div className="tablero">
                <Cuadro valor={cuadros[0]} funcionClick={() => click(0)} />
                <Cuadro valor={cuadros[1]} funcionClick={() => click(1)} />
                <Cuadro valor={cuadros[2]} funcionClick={() => click(2)} />
                <Cuadro valor={cuadros[3]} funcionClick={() => click(3)} />
                <Cuadro valor={cuadros[4]} funcionClick={() => click(4)} />
                <Cuadro valor={cuadros[5]} funcionClick={() => click(5)} />
                <Cuadro valor={cuadros[6]} funcionClick={() => click(6)} />
                <Cuadro valor={cuadros[7]} funcionClick={() => click(7)} />
                <Cuadro valor={cuadros[8]} funcionClick={() => click(8)} />
            </div>
        </div>
    );
}
export default Tablero;