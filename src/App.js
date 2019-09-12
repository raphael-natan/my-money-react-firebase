import React from 'react'
import Rest from './utils/rest'
import Header from './elements/Header'
import Home from './pages/Home/Index'
import Movimentacoes from './pages/Movimentacoes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'

const baseURL = 'https://mymoney-dev.firebaseio.com/'
const { useGet } = Rest(baseURL)

function App() {
  const data = useGet('meses')

  return (
    <Router>
      <div className='container'>
        <Header />
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Home} />
        <Route path='/movimentacoes/:data' component={Movimentacoes} />
      </div>
    </Router>
  )
}

export default App
