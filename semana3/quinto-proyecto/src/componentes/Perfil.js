import React from "react";
import Boton from "./Boton";
import '../styles/Perfil.css';
function Perfil(){
    const impri=(a)=>{
        console.log(a);
    }
    return(
        <div className="container-perf">
            <div className="perf">
            <div className="text">
                    <label>Nombre</label>
                </div>
                <input type="text"></input>
                <div className="text">
                    <label>Apellido</label>
                </div>
                <input type="text"></input>
                <div className="text">
                    <label>Contraseña</label>
                </div>
                    <input type="text"></input>
            </div>
            <div className="botones">
                <Boton text="Editar" funcionClick={()=>impri("Editar")}/>
            </div>
        </div>
    );
}
export default Perfil;