"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import style from './Foto.module.css';
function Foto (){
    const [perrito,setPerrito]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [nom,setNom]=useState(" ");
    const url="https://pokeapi.co/api/v2/pokemon/squirtle";
    useEffect(()=>{
        fetch(url).then(respuesta=>respuesta.json())
        .then(datos=>{setPerrito(datos.sprites.front_default),setEstado(datos.abilities[0].ability.name, setNom(datos.species.name))})
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <h1>{nom}</h1>
            <Image src={perrito} alt="perrito" width={500} height={500}></Image>
        </div>
    );
}
export default Foto;