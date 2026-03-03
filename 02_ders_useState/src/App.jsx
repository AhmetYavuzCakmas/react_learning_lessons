import { useState } from 'react'
import './App.css'

function App() {
  const [isim, setİsim] = useState('Ahmet Yavuz');
  const [soyadi,setSoyadi] = useState("Cakmas");
  //useState: bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir

  const [count,setCount] = useState(0);

  const arttir = () =>{
    setCount(count +1)
  }

  const azalt = () =>{
    if (count >0){
         setCount(count -1)
    }
   
  }

  return (
    <>
      <div>{isim}</div>
      <div><button onClick={()=>{setİsim("Adem")}}>İsim Değiştri</button></div>
      <div>{count}</div>
      <div><button onClick={arttir}>Arttır</button></div>
      <div><button onClick={azalt}>Azalt</button></div>
    </>
  )
}

export default App
