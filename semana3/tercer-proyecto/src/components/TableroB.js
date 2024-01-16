import React from "react";
import Cuadro from "./Cuadro";
import '../styles/Tablero.css';
function TableroB({cuadros,onClick}){
    function renderizarCuadro(i){
        return(
            <Cuadro valor={cuadros[i]} funcionClick={()=>onClick(i)}/>
        );
    }
    return (
        <div className="juego">
            <div className="tablero">
                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
}
export default TableroB;