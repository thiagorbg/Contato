
import * as s from './styles/index'
import store from './store/storeP'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home'
import {Cadastro} from './pages/home/Cadastro'


function App() {


  const rotas = createBrowserRouter([
    {
      path:'/',
      element: <Cadastro/>
    },
    {
      path: '/novoo',
      element: < Home />
    }
  ])

  return (
    <Provider store={store}>
      <s.Container>
        <RouterProvider router={rotas} />
      </s.Container>
    </Provider>
  )
}

export default App
