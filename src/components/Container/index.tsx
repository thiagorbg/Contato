
import UserActionTypes from '../../store/reducers/actions-types';
import * as s from '../Container/style'
import { useSelector, useDispatch } from 'react-redux'




function MainCard() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentEdit } = useSelector((rootReducer: any) => rootReducer.userReducer);
  console.log(currentEdit)

  const dispatch = useDispatch()

  const login = () => {
    dispatch ({
      type: UserActionTypes.LOGIN
    })
  }



  return (
    <s.Mcard>
      <s.Scard>
        <s.Titulo>ola</s.Titulo>
        <s.Label htmlFor="">Nome completo</s.Label>
        <s.Input placeholder="Digite seu Nome..." type="text" />
        <s.Label htmlFor="">E-Mail</s.Label>
        <s.Input placeholder="Digite seu E-mail..." type="text" />
        <s.Label htmlFor="">Telefone</s.Label>
        <s.Input placeholder="Digite seu Telefone..." type="text" />
        <s.Button onClick={login}>Editar</s.Button>
        <s.Button>Remover</s.Button>
      </s.Scard>
    </s.Mcard>
  )
}

export default MainCard
