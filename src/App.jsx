import React from 'react'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './contexts/UserContext'

import Layout from './components/Layout/Layout'
import 'react-loading-skeleton/dist/skeleton.css'
import CartContextProvider from './contexts/CartContext'


function App() {
  return (
    <React.Fragment>
      <UserContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Layout>
              <Routes></Routes>
            </Layout>
          </BrowserRouter>
        </CartContextProvider>
      </UserContextProvider>
    </React.Fragment>
  )
}

export default App
