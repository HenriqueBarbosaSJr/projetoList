import './list.css';
import { TipoLista } from '../types/item';

type Lista = {
    itens : TipoLista;
}
export default function Lista({itens} : Lista){
 return( 
    <>
        <div id="containerItens">
            <div className='itensList'>{itens.id}</div>
            <div className='itensList'>{itens.nome}</div>
            <div className='itensList'>{itens.email}</div>
        </div>
    </>
 )
}