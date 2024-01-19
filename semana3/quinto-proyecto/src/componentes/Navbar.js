import React from "react";
import { LinK } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <LinK to="/">Inicio</LinK>
                </li>
                <li>
                    <LinK to="/login">Login</LinK>
                </li>
                <li>
                    <LinK to="/registro">Registro</LinK>
                </li>
                <li>
                    <LinK to="/perfil">Perfil</LinK>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;