"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./Dogs.module.css";
function Dogs(){
    const[dog,setDog]=useState("/vercel.svg");
    const url="https://dog.ceo/api/breed/terrier/irish/images/random";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())     /*el res puede ser cualquier nombre com si fuera un objeto*/ 
        .then(data=>{setDog(data["message"])})            /*el data igual*/ 
    },[])
    return(
        <div className={style["contenedor-dogs"]}>
            <h1 className="Title">Dogs wey</h1>
            <Image src={dog} alt="dog" width={500} height={500}/>
        </div>
    );
}
export default Dogs;