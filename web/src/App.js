/*
Component: bloco isolado de HTML, CSS e JS, o qual nao interfere no restante aplicação.
Função que retorna algum conteudo HTML, CSS ou JS.
Quando criar: quando há repetição de trechos de código ou quando conseguimos isolar um 
trecho da nossa aplicação dentro de algo que nao inflija no restante dos componentes.

Props: informações que o componente PAI passa para o componente FILHO

State: informações mantidas pelo componetes (lembrar: imutabilidade)
*/

import React, { useEffect, useState } from 'react';
import Api from './Services/Api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './components/Devitem';
import DevForm from './components/DevForm'

function App() {
  const [devs, setDevs] = useState([]);

  async function handleAddDev(data){


    const response = await Api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  useEffect(()=>{
      async function loadDevs(){
        const response = await Api.get('/devs');
        
        setDevs(response.data);

      }

      loadDevs();
  },[])
  
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev=>(
            <DevItem key = {dev._id} dev = {dev}/>
          ))}

        </ul>
      </main>
    </div>
  );
}

export default App;
