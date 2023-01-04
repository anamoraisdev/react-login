import React, {useState} from "react";
import Axios from 'axios';


const Principal = () => {
    const [porkemon, setPokemon] = useState();

    const pegarPokemon = async() => {
        const resultado = await Axios.get('https://pokeapi.co/api/v2/ability/${id}/')
    }

   
    return(
        <div>
            <img/>
            <h1></h1>
            <p></p>
            
        </div>
    )
}
export default Principal;