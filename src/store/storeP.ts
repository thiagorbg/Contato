import { configureStore } from '@reduxjs/toolkit'


import ContatosReducer from '../store/reducers/reducer-cantatos'

const store = configureStore({
  reducer: {
    Contatos: ContatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
