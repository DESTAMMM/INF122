import React from "react";
import '../stylesheet/Evento.css';
import Socials from '../components/Socials.js';
function Evento() {
    return(
        <div className="card-container">
            <img className="card-image"
            src={require(`../images/Evento1.jpeg`)}
            alt="Foto del evento"/>
            <div className="card-content">
                <h2 className="card-title">Py Pizza 03 - PyPuzzle</h2>
                <p className="card-date">03 de Diciembre de 2023 - 13:30 GMT-4</p>
                <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
                <p className="card-description">¡Hola Pythonista!
                Participa en este Evento Presencial de la comunidad Python La Paz
                ¿Cuánto conoces de Python?
                Aprende a trabajar en equipo resolviendo increíbles acertijo
                ¡Anímate a ser parte de esta actividad!</p>
                <Socials
                image1="facebook"
                image2="twitter"
                image3="youtube"
                />
            </div>
        </div>
    );
}
export default Evento;