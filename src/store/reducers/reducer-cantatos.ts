import UserActionTypes from "./actions-types"

const initialState = {
  currentEdit: null
}

type Acition = {
  type: string
  payload?: any

}

const userReducer = (state = initialState, action: Acition) => {
  if (action.type === UserActionTypes.LOGIN) {
    return { ...state, currentEdit: 10 }
  }
  return state;
}

export default userReducer
