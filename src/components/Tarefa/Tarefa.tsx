import {remover} from "../../store/reducers/reducer-cantatos"
import { useDispatch } from "react-redux"
import { useState } from "react"
import * as S from "./styles/styles"
import * as s from '../Container/style'
import Contatos from "../../models/Tarefa"

type Props = Contatos

const Tarefa = ({email ,nome ,id ,telefone}:Props) => {
  const dispatch = useDispatch()

const [setEditar, setCancelar] = useState(false)

  return (

  <li>
      <h2>{nome}</h2>
      <S.InputName>Email :</S.InputName>
      <S.Campo value={email}> </S.Campo>
      <S.InputName>Telefone</S.InputName>
      <S.Campo  value={telefone}> </S.Campo>
      {setEditar ?
      <>
      <s.Button>Salvar</s.Button>
      <s.Button onClick={() => setCancelar(false)}>Cancelar</s.Button>
      </>
      :
      <>
      <s.Button onClick={() => dispatch(remover(id))}>Editar</s.Button>
      </>
      }
  </li>
  )
}

export default Tarefa
