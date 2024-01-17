import React from "react";
import '../styles/Nota.css';
function Nota({nota, onEdit, onDelete}){
    return(
        <div>
            <p className="nota">{nota}</p>
            <div>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>eliminar</button>
            </div>
        </div>
    );
}
export default Nota;