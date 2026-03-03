import { useState } from 'react'
import './App.css'
import Product from './Product'

function App() {
  

  return (
    <>
      <Product productName="Ayakkabı" price={3200}/>
      <hr />
      <Product productName="Pantolon" price={950}/>
    </>
  )
}

export default App
