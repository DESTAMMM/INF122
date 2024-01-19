import React from "react";
import Boton from "./Boton";
import '../styles/Registro.css';
function Registro(){
    const impri=(a)=>{
        console.log(a);
    }
    return(
        <div className="Container">
            <div className="datos">
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
              <Boton text="Registrar" funcionClick={()=>impri("Registrar")}/>
            </div>
        </div>
    );
}
export default Registro;