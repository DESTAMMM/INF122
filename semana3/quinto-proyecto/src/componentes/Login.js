import React from "react";
import Boton from "./Boton";
import '../styles/Login.css';
function Login(){
    const impr=(a)=>{
        console.log(a);
    }
    return(
        <div className="container">
            <div className="datos">
                <div className="text">
                    <label>Usuario</label>
                </div>
                <input type="text"></input>
                <div className="text">
                    <label>Contraseña</label>
                </div>
                <input type="text"></input>
            </div>
            <div className="botones">
                <Boton text="Registar" funcionClick={()=>impr("Registrar")}/>
                <Boton text="Ingresar" funcionClick={()=>impr("Ingresar")}/>
            </div>
        </div>
    );
}
export default Login;