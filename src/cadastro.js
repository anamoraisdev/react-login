import React, {useState} from "react";
import axios from "axios";

const Cadastro = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-10 ">
            <h1 className='text-slate-600 text-2xl'>Cadastro</h1>
            <input type="text" placeholder="nome" className="shadow w-[50%] h-8" onChange={(event) => setNome(event.target.value)}/>
            <input type= "text" placeholder="sobrenome" className="shadow w-[50%] h-8" onChange={(event) => setSobrenome(event.target.value)}/>
            <input type="date" placeholder="nascimento" className="shadow w-[50%] h-8" onChange={(event) => setNascimento(event.target.value)}/>
            <input type="text" placeholder="email" className="shadow w-[50%] h-8" onChange={(event) => setEmail(event.target.value)}/>
            <input type="text" placeholder="senha" className="shadow w-[50%] h-8" onChange={(event) => setSenha(event.target.value)}/>
            <input type= "text" placeholder="confirmar senha" className="shadow w-[50%] h-8" onChange={(event) => setSenhaConfirmada(event.target.value)}/>
            <button type="submit" className="bg-slate-600 text-white w-[20%] h-8 hover:bg-slate-500 m-3" onClick={() => cadastrar()}>criar conta </button>
        </div>
    )
}
export default Cadastro;