import './App.css';
import Contador from './components/Contador';
import Boton from './components/Boton';
function App() {
  const click=()=>{
    console.log("1");
  }
  const reiniciar=()=>{
    console.log("reiniciar");
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={0}/>
        <div className='contenedor-botones'>
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click}/>
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar}/>
        </div>
      </div>
    </div>
  );
}
export default App;