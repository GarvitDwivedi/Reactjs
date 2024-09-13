import { useCallback, useEffect, useState } from 'react'

function App() {

  const [length , setLength] = useState(8) ;
  const [charAllowed , setCharAllowed] = useState(false);
  const [numAllowed , setNumAllowed] = useState(false);
  const [password ,  setPassword] = useState('');



  const passwordGenerator = useCallback(()=>{

    let pass = "" ;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    if(charAllowed) str+= "!@#$%^&*(){}:'./" ;
    if(numAllowed) str += "01234567890"

    for(let i = 0 ; i < length ; i++){
      let ind = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(ind);
    }

  } , [length , charAllowed , numAllowed , setPassword])


  useEffect

  return (
    <h1 className="text-3xl font-bold underline text-white">
    Hello world!
  </h1>

  )
}

export default App
