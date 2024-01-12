import './App.css';
import Evento from './components/Evento.js';
import EventoB from './components/EventoB.js';

function App() {
  return (
    <div className="App">
        <Evento/>
        <Evento/>
        <EventoB title="Py Pizza 03"
        image="Evento1"
        dateLiteral="17 de enero"
        placeLiteral=" junto al banco union"
        description=" #DueloPrro"
        />
        <EventoB title="¡Ven a conocer a la comunidad!"
        image="Evento1"
        dateLiteral="13 Noviembre de 2023 - 27 de Noviembre de 2023"
        placeLiteral="La Paz - Bolivia"
        description=" ¡Hola Pythonista!

        Participa en este Evento Presencial de la comunidad Python La Paz
        
        ¿Sabías que existe una comunidad de Python en la ciudad de La Paz?
        
        Entérate de todas las actividades y proyectos que realiza la comunidad Python La Paz
        
        ¡Descubre cómo participar!
        
        Completa el formulario de registro y participa del sorteo de asombrosos premios el día de la presentación
        
        Fechas
        
        Aula 105 - Carrera de Estadística - UMSA - Lunes 13 de Noviembre de 12:00 - 14:00
        Campus Achocalla - Universidad Privada de Bolivia - Miércoles 15 de Noviembre de 12:00 - 14:00
        Paraninfo - Universidad del Valle Sede La Paz - Martes 21 de Noviembre de 16:00 - 18:00
        Sala Audiovisual - Carrera de Informática - UMSA - Jueves 23 de Noviembre de 16:00 - 18:00
        Auditorio 4 - Universidad Católica Boliviana - Lunes 27 de Noviembre de 18:30 - 20:30"
        />
    </div>
  );
}
export default App;
