"use client";
import Image from 'next/image'
import styles from './page.module.css'
import {useState,useEffect} from 'react'

export default function Home() {
  
  const [pokeData,setPokeData] = useState({});
  const [pokemonImage, setPokemonImage] = useState("")
  useEffect(()=>{
    async function getInfo(){
      try {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      const jsonData = await data.json();
      setPokeData(jsonData);
      setPokemonImage(jsonData.sprites.front_default);
      console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();
  },[]);

  useEffect(()=>{
    console.log("now poke data is : ",pokeData);
  },[pokeData]);

  
  return (
    <main className={styles.main}>
     <h1>Prince Garg</h1>
     {pokemonImage && pokeData ?
        <>
          <img src={pokemonImage} style={{height:'400px'}}/>
          <p>{pokeData.name}</p>
        </>
        :
        <p></p>
      }
    </main>
  )
}
