import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Quantity from './components/quantity'

class App extends  React.Component{
  render(){
    return(
      <>
        <h1>React App</h1>
        <Quantity />
      </>
    )
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
