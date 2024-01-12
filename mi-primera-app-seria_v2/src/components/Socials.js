import React from "react";
import '../stylesheet/Socials.css';
function Socials(){
    return(
        <div className="link-container">
            <div className="link">
                <img src={require(`../images/Evento1.jpeg`)}
                alt="Foto del evento"/>
            </div>
            <div className="link">
                <img src={require(`../images/Evento1.jpeg`)}
                alt="Foto del evento"/>
            </div>
            <div className="link">
                <img src={require(`../images/Evento1.jpeg`)}
                alt="Foto del evento"/>
            </div>
        </div>
    );
}
export default Socials;