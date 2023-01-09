import {React, useEffect, useState}from "react";
import Axios from "axios";


const Filter = ({setRenderInfo, infoPokemon}) => {
    const [search, setSearch ] = useState('');
    useEffect(() => {
        if(search === ""){
            setRenderInfo(infoPokemon)
        } else{
            setRenderInfo(infoPokemon.filter((pokemon) => pokemon.name.includes(search)))
        }
    },[search])
    
    return(
        <div>
            <input className="" type="text" placeholder="pokemon name" value={search} onChange={(event) => setSearch(event.target.value)}></input>
            <button type="button"> buscar</button>
        </div>
    )
}
export default Filter;