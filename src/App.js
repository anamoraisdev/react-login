
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const mudarPagina = useNavigate();
  const enviar = async() => {
    const usuario = {
      email,
      senha
    }
    const resultado = await axios.post("",usuario)
    if (resultado.code === 200){
      mudarPagina("/inicio")
    }if (resultado.code !== 200) {
      console.log(resultado.data)
    }
  }

  return (
    <div className='flex justify-between items-center h-screen'>
      <div className='w-[50%]'>
        <img src='./login.jpg'/>
      </div>
      <div className=" w-[60%] flex flex-col justify-center items-center h-screen"  >
        <h1 className='text-[#203A40] text-2xl m-7'>Login usuario</h1>
        <input type="text" placeholder='email' onChange={(event) => setEmail(event.target.value)} className="w-[60%] h-8 m-3 shadow"/>
        <input type="password" placeholder='senha' onChange={(event) => setSenha(event.target.value)} className="w-[60%] h-8 m-3 shadow"/>
        <button type='submit' onClick={() => enviar()} className="bg-[#203A40] text-white w-[30%] h-8 hover:bg-slate-500 m-3"> enviar </button>
        
      </div>
    </div>
  );
}

export default App;
