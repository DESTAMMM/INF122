import React, { useState } from 'react';
import Nota from './Nota';
import '../styles/ListaNotas.css';
function ListaNotas(){
  const[notas,setNotas]=useState([]);
  const addNota=()=>{
    setNotas([...notas,"otranota"]);
    console.log(notas);
  }
    const eliminar=()=>{
        console.log("eliminar");
      }
      const editar=()=>{
        console.log("editado");
      }
    return(
        <div className='contenedor'>
            <input id="not" className="input" type='text'></input>
            <button className='boton' onClick={addNota}>Agregar Nota</button>
            <Nota nota={"buenas"} onDelete={eliminar} onEdit={editar} />
        </div>
    );
}
export default ListaNotas;