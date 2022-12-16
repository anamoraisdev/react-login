import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Reset = () => {
    const [email, setEmail] = useState();
    const [novaSenha, setNovaSenha] = useState();
    const mudarPagina = useNavigate();
    const alterarSenha = async() => {
        const rSenha = {
            email,
            novaSenha
        }
        const resultado = await axios.post("", rSenha)
        if(resultado.code === 200){
            console.log("senha altera com sucesso!")
        } if (resultado != 200){
            console.log("erro!")
        }
    }
    return(
        <div className="flex flex-col justify-center items-center h-screen" >
        <h1 className='text-slate-600 text-2xl m-7'>Recuperação de senha </h1>
        <input type="text" placeholder='email' className="w-[50%] h-8 m-3 shadow" onChange={(event) => setEmail(event.target.value)}/>
        <input type="password" placeholder='nova senha' className="w-[50%] h-8 m-3 shadow" onChange={(event) => setNovaSenha(event.target.value)}/>
        <button type='submit' lassName="bg-slate-600 text-white w-[20%] h-8 hover:bg-slate-500 m-3" onClick={() => alterarSenha()}> confirmar </button>
  </div>
    )

}
export default Reset;