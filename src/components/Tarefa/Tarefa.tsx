import {remover, salvar} from "../../store/reducers/reducer-cantatos"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import * as S from "./styles/styles"
import * as s from '../Container/style'
import Contatos from "../../models/Tarefa"

type Props = Contatos


const Tarefa = ({email ,nome ,id ,telefone}:Props) => {
  const dispatch = useDispatch()

const [setEditar, setCancelar] = useState(false)
const [campoNormal,setEditarCampo] = useState('')
const [campoNormalTel,setEditarCampoTel] = useState<string>('')


  useEffect(() => {
    if (email.length >= 0) {
      setEditarCampo(email)
    }
  }, [email])

  useEffect(() => {
    let telefones = telefone.toString()
    if (telefones.length >=0) {

      setEditarCampoTel(telefones)
    }
  }, [telefone])

    function cancelarEdicao () {
      let telefones = telefone.toString()
      setCancelar(false)
      setEditarCampo(email)
      setEditarCampoTel(telefones)
    }




  return (

  <S.list>
    <S.Div>
      <S.Name>{nome}</S.Name>
      <S.InputName>Email :</S.InputName>
      <S.Campo onChange={ e => setEditarCampo(e.target.value)} disabled={!setEditar} value={campoNormal}> </S.Campo>
      <S.InputName >Telefone :</S.InputName>
      <S.Campo onChange={ e => setEditarCampoTel(e.target.value)} disabled={!setEditar} value={campoNormalTel}>  </S.Campo>
      {setEditar ?
      <>
      <s.Button onClick={() => {
        dispatch(
          salvar({
            email,
            nome,
            id,
            telefone
          })
        )
        setCancelar(false)
      }}
      >Salvar</s.Button>
      <s.CButton onClick={cancelarEdicao}>Cancelar</s.CButton>
      </>
      :
      <>
      <s.Button onClick={() => setCancelar(true)} >Editar</s.Button>
      <s.CButton onClick={() => dispatch(remover(id))}>Remover</s.CButton>
      </>
      }
    </S.Div>
  </S.list>
  )
}

export default Tarefa


