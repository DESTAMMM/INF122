import React from "react";
function Boton({text,funcionClick}){
    return(
            <button onClick={funcionClick({text})}>{text}</button>
    );
}
export default Boton;