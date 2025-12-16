
import { useDispatch } from 'react-redux'
import * as s from '../Container/style'
import { add } from '../../store/reducers/reducer-cantatos'
import { FormEvent, useState } from 'react'
import Tarefa from '../../models/Tarefa'
import { useNavigate } from 'react-router-dom'




function MainCard() {
  const [nome, setnome] = useState('')
  const [email, setemail] = useState('')
  const [telefone, settelefone] = useState('')

const navigate = useNavigate()

const dispatch = useDispatch()

const cadastrasrTarefa = (evento: FormEvent) => {
  evento.preventDefault()
  const tarefaAdicionar = new Tarefa(
    nome,
    email,
    telefone,
    9
  )

  dispatch(add(tarefaAdicionar))
  navigate('/')
}
function mascara  (){
  if (!nome.trim() || !email.trim() || !telefone){
    alert ('Digite algo no campo')
  }

}

  return (
    <s.Mcard onSubmit={cadastrasrTarefa}>
      <s.Scard>
        <s.Titulo>ola</s.Titulo>
        <s.Label htmlFor=""></s.Label>
        <s.Input onChange={(e) => setnome(e.target.value)} placeholder="Digite seu Nome..." value={nome} type="text" >
        </s.Input>
        <s.Label htmlFor="">E-Mail</s.Label>
        <s.Input onChange={(e) => setemail(e.target.value)} placeholder="Digite seu E-mail..." value={email} type="text" >
        </s.Input>
        <s.Label htmlFor="">Telefone</s.Label>
        <s.Input onChange={(e) => settelefone(e.target.value)} placeholder="Digite seu Telefone..." value={telefone} type="text" >
        </s.Input>
        <s.Button onClick={() => mascara()}>adicionar</s.Button>

      </s.Scard>
    </s.Mcard>
  )
}

export default MainCard
