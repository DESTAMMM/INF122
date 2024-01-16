import React from "react";
import Cuadro from "./Cuadro";
import '../styles/Tablero.css';
import { useState } from "react";
function Tablero(){
    const[cuadros, setCuadros]=useState(Array(9).fill(null))
    const [valor,setValor]=useState("X");
    const click=()=>{
        if(valor==="X"){
            setValor("O");
        }else{
            setValor("X");
        }
        //esto es equvalente a esto: setValor=="X" ? setValor("O"): setValor("X")
    }
    return(
        <div className="tablero">
            <Cuadro valor={valor} funcionClick={click}/>
            <Cuadro valor={valor} funcionClick={click}/>
            <Cuadro valor={valor} funcionClick={click}/>
            <Cuadro valor={valor} funcionClick={click}/>
            <Cuadro valor={valor} funcionClick={click}/>
            <Cuadro valor={valor} funcionClick={click}/>
            <Cuadro valor={valor} funcionClick={click}/>
            <Cuadro valor={valor} funcionClick={click}/>
            <Cuadro valor={valor} funcionClick={click}/>
        </div>
    );
}
export default Tablero;