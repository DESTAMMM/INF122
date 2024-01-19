import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registo';
import Perfil from './componentes/Perfil';
import Navbar from './componentes/Navbar';
import Galeria from './componentes/Galeria';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/galeria' element={<Galeria/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
