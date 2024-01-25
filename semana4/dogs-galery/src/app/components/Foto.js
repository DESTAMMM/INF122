"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import style from './Foto.module.css';
function Foto (){
    const [perrito,setPerrito]=useState("/vercel.svg");
    const url="https://dog.ceo/api/breeds/image/random";
    useEffect(()=>{
        fetch(url).then(respuesta=>respuesta.json())
        .then(datos=>{setPerrito(datos["message"])})
    },[]);
    return(
        <div className={style.contenedor}>
            <Image src={perrito} alt="perrito" width={500} height={500}></Image>
        </div>
    );
}
export default Foto;