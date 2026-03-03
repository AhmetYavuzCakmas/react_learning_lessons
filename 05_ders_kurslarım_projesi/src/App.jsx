import { useState } from 'react'
import './App.css'
import Header from './Header'
import {cats} from './data'
import Cat from './Cat'
import './css/Cat.css';

function App() {
  
  return (
    <>
     <Header/>
     <div className='cat-main'>
     {
       cats?.map((cat)=>(
        <Cat key={cat.id} cat={cat} />
       ))
     }
     </div>
    </>
  )
}

export default App
