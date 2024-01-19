import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registo';
import Perfil from './componentes/Perfil';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route path='/' exact Component={Login}/>
            <Route path='/login' Component={Login}/>
            <Route path='/registro' Component={Registro}/>
            <Route path='/perfil' Component={Perfil}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
