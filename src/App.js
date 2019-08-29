import React from 'react'
import Rest from './utils/rest'
import Header from './elements/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/Index'
import Movimentacoes from './pages/Movimentacoes'

const baseURL = 'https://mymoney-dev.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

function App() {
  // const data = useGet('movimentacoes/2019-08')
  // const [postData, post] = usePost('movimentacoes/2019-08')
  // const [deleteData, remove] = useDelete()
  const data = useGet('meses')

  const saveNew = () => {
    // post({ valor: 10, descricao: 'olá' })
  }

  const doRemove = () => {
    // remove('movimentacoes/2019-08/-Ln-KZAil_r6Rohs3gY2')
  }

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/movimentacoes/:data' component={Movimentacoes} />
      </div>
    </Router>
  )
}

export default App
