
import { useState } from 'react'
import './App.css'
import Lista from './components/list'


type tipoLista = {
  id: number;
  nome:string;
  email:string;
} 

function App() {
  
  const [ list, setList ] = useState<tipoLista[]>([
    {id:1, nome:'aluno01', email:'teste@gmail.com' },
    {id:2, nome:'aluno02', email:'teste2@gmail.com' },
    {id:3, nome:'aluno03', email:'teste2@gmail.com' }

  ])

  

  return (
    <>
      <h1>Lista Exemplo React</h1>
      <div id="containerLista">
            <div className='headList'>Identificação</div>
            <div className='headList'>Nome</div>
            <div className='headList'>E-mail</div>
        </div>
      {
        list.map((item, index)=>( 
          <Lista key={index} itens={item} />
        ))
      }
    </>
  )
}

export default App
