'use client';
import style from './page.module.css';
import Contador from './components/Contador.js';
import Boton from './components/Boton';
import { useState } from 'react';
function App() {
  const[nroClicks, setNumClicks]=useState(0);
  const[show,setShow]=useState(true);
  const reducir3=()=>{
    setNumClicks(nroClicks-3)
  }
  const aumentar3=()=>{
    setNumClicks(nroClicks+3)
  }
  const reducir1=()=>{
    setNumClicks(nroClicks-1)
  }
  const click=()=>{
    setNumClicks(nroClicks+1);
    console.log("1");
  }
  const reiniciar=()=>{
    setNumClicks(0);
    console.log("reiniciar");
  }
  const mostrar=()=>{
    setShow(!show);
  }
  const prod=()=>{
    setNumClicks(nroClicks*3);
  }
  return (
    <div className={style.App}>
      <div className={style["contenedor-principal"]}>
        <Contador nroClicks={nroClicks} mostrar={show} />
        <div className={style['contenedor-botones']}>
          <div className={style.botones}>
            <Boton texto="-3" esBotonClick={true}
              funcionClick={reducir3} />
            <Boton texto="+3" esBotonClick={true}
              funcionClick={aumentar3} />
            <Boton texto="-1" esBotonClick={true}
              funcionClick={reducir1} />
            <Boton texto="+1" esBotonClick={true}
              funcionClick={click} />
            <Boton texto="*3" esBotonClick={true}
              funcionClick={prod}/>
          </div>
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
          <Boton texto="Mostrar/Ocultar" esBotonClick={false}
            funcionClick={mostrar} />
        </div>
      </div>
    </div>
  );
}
export default App;