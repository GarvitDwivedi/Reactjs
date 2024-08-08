import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  // const decresCnt =() =>{
  //   setCount(count - 1); // this will not increase or decrease the count by three or four becouse it will update in onetime but the cnt value 
  //   setCount(count - 1);// wll be same in all 
  //   setCount(count - 1);
  //   setCount(count - 1);
  // }

  // const increasecnt =() =>{
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }

  
  const decresCnt =() =>{
    setCount((prev) => prev-1);
    setCount((prev) => prev-1);
    setCount((prev) => prev-1);
    setCount((prev) => prev-1);
    setCount((prev) => prev-1);
    
  }

  const increasecnt =() =>{
    setCount((prev) =>{
      return prev+1 ;
    });
    setCount((prev) =>{
      return prev+1 ;
    });
    setCount((prev) =>{
      return prev+1 ;
    });
    setCount((prev) =>{
      return prev+1 ;
    });
    setCount((prev) =>{
      return prev+1 ;
    });
  }

  return (
    <>
     <button onClick={decresCnt}>
          count Increaser {count}
        </button>
        <button onClick={increasecnt}>
          count Increaser {count}
        </button>
    </>
  )
}

export default App
