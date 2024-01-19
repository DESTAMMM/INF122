import React from "react";
function Galeria(){
    return(
    <div className="cont-imagen">
        <div className="perf-infos">
            <img src="" alt=""/>
            <p className="inf">Pedro</p>
        </div>
        <div className="imagenes">
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
            <img src={require('../imagenes/gato.jpeg')} alt=""/>
        </div>
    </div>
    );
}
export default Galeria;