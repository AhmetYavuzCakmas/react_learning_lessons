import { useEffect, useState } from 'react' 
import './App.css'

function App() {
  const [isim,setİsim] = useState('');
  const [soyisim, setSoyisim] = useState('');
  useEffect(() =>{
    console.log("her zaman çalışır")
  })

  useEffect(() =>{
    console.log("ilk render edildiğinde çalışır")
  },[])

  useEffect(() => {
    console.log("ilk render edildiğinde ve İSİM state değeri değişitiğinde çalışır")
  },[isim])

  useEffect (() => {
    console.log("ilk render edildiğinde ve SOYİSİM state değeri değiştiğinde çalışır.")
  },[soyisim])

  return (
    <>
      <div><button onClick={()=> setİsim("Yavuz")}>Adı Değiştri</button></div>
      <div><button onClick={()=> setSoyisim("Çakmas")}>Soyisim Değiştir</button></div>
    </>
  )
}

export default App
