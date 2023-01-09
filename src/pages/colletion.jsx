import React, {useState, useEffect} from "react";
import Axios from 'axios';
import Navbar from '../components/navbar'
import Filter from "../components/filter";


const Colletion = () => {
    const [pokemons, setPokemons] = useState([]);
    const [infoPokemon, setInfoPokemon] = useState([]);
    const [renderInfo, setRenderInfo] = useState([]);
    
    const pegarNomes = async() => {
        try {
            const resultado = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
            const data = resultado.data.results
            setPokemons(data)
        } catch(error) { 
            console.log("deu erro")
        }
    }
    useEffect(() => {
        pegarNomes();
    }, []);

    const pegarInfos = async() => {
        const infos = await Promise.all(pokemons.map(info))
        console.log(infos)
        setInfoPokemon(infos);
    }
    useEffect(() => {
        pegarInfos()
    },[pokemons])

    const info = async(pokemon) => {
        const resultado = await Axios.get(pokemon.url)
            if(resultado.status === 200){
                return resultado.data
            }
    }

    const buscarPokemon = () => {
        const names = pokemons;
        
    }
    useEffect(() => {
        setRenderInfo(infoPokemon);
    },[infoPokemon])

    return(
        <div>
            <Navbar/>
            <Filter setRenderInfo={setRenderInfo} infoPokemon={infoPokemon}/>
            <h1> Pokemon collection</h1>
            <div className="grid gap-3 md:grid-cols-5  sm:grid-cols-1">
                {renderInfo && renderInfo.map((pokemon) => (
                    <div  key={pokemon.name} className="w-[100%] border flex flex-col justify-center items-center gap-2 p-3">
                        <img src={pokemon?.sprites?.front_default}/>
                        <a href={`/pokemon/${pokemon.name}`} className="text-xl">{pokemon.name}</a>
                        <div className="flex gap-3">
                            <button className="bg-orange-800 text-white  border rounded-full border-orange-200 px-3" >collect</button>
                            <button className="bg-orange-600 text-white  border rounded-full border-orange-200 px-2" >+</button>
                        </div>
                    </div>
                ))}
           </div>
      </div>
    );
};
export default Colletion;