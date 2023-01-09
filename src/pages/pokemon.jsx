import React, { useEffect, useState } from "react";
import Axios from "axios";
import {useParams} from "react-router-dom";
import Navbar from "../components/navbar";

const Pokemon = () => {
    const params = useParams();
    const [pokemon, setPokemon] = useState();
    const pegarPokemon = async() => {
        const resultado = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon_name}`)
        if (resultado.status === 200){
            setPokemon(resultado.data)
            console.log(resultado.data)
        }
    }
    useEffect(() => {
        pegarPokemon();
    },[])

    let types = ""
    pokemon?.types?.map((type) => {
        types += type.type.name + " "
    })

    return (
        <div className="w-full h-full flex-col">
            <Navbar/>
            <div className="border flex justify-center items-center">
                <img className="w-[30%]" src={pokemon?.sprites?.front_default} />
            </div>
            <div className="flex justify-center items-center ">
                <p className="text-2xl">{pokemon?.name} </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p> {types}</p>
                <p> experience: {pokemon?.base_experience}</p>
                <p> peso: {pokemon?.weight}</p>
                <p> altura: {pokemon?.height}</p>
            </div>
        </div>

    );
}
export default Pokemon;