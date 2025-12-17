import { Container } from "../../../styles"
import BotaoAdicionar from "../../../components/Container/BotaoAdicionar"
import * as S from "../../../components/Tarefa/styles/styles"
import  Tarefa  from "../../../components/Tarefa/Tarefa"
import { RootReducer } from "../../../store/storeP"
import {useSelector}  from "react-redux"



export const Cadastro = () => {

const {itens} = useSelector((state: RootReducer) => state.Contatos)


  return (
    <>
      <Container>
        <BotaoAdicionar/>
        {itens.map((c)=> (
        <S.UL key={c.nome}>
          <Tarefa
          id={c.id}
          email={c.email}
          nome={c.nome}
          telefone={c.telefone}

          />
        </S.UL>
        ))}
      </Container>
    </>
  )
}






