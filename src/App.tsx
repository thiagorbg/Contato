
import * as s from './styles/index'
import store from './store/storeP'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home'
import path from 'path'
import Cadastro from './pages/home/Cadastro'


function App() {


  const rotas = createBrowserRouter([
    {
      path:'/',
      element: < Home />
    },
    {
      path: '/novo',
      element: <Cadastro/>
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
