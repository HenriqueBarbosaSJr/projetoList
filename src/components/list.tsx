import './list.css';

type tipoLista = {
    itens :    {
            id: number;
            nome:string;
            email:string;
        } 
}
export default function Lista({itens} : tipoLista){
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