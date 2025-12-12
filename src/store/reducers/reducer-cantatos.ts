import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import Contatos from "../../models/Tarefa";


type ContatosState = {
  itens: Contatos[]
}
const initialState: ContatosState = {
  itens: [
    {
      id:1,
      nome: 'Thiago',
      email: 'dmthiagoribeiro@gmail.com',
      telefone: 94344664

    },
    {
      id:2,
      nome: 'Thiago',
      email: 'dmCleiton@gmail.com',
      telefone: 948787658

    },
    {
      id:3,
      nome: 'Julio',
      email: 'dmJUlio@gmail.com',
      telefone: 9998741

    }
  ]
}


const ContatosSliceReducer = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((Contatos) => Contatos.id !== action.payload)

    }
  }
})

export const {remover} = ContatosSliceReducer.actions

export default ContatosSliceReducer.reducer
























//import UserActionTypes from "./actions-types"

// const initialState = {
//   currentEdit: null
// }

// type Acition = {
//   type: string
//   payload?: any

// }

// const userReducer = (state = initialState, action: Acition) => {
//   if (action.type === UserActionTypes.LOGIN) {
//     return { ...state, currentEdit: 10 }
//   }
//   return state;
// }

// export default userReducer
