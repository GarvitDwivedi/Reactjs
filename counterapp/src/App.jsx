import { useState } from 'react'


function App() {

  const[counter , setCounter] = useState(0);

  const IncrCounter = () =>{

    if(counter <  99){
    setCounter(counter+1);
    }

  }

  const DercCounter = () =>{
    if(counter > 0){
    setCounter(counter-1);
  }
  }
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-white">My Counter Project</h1>
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={IncrCounter}>
         IcreaseCounter {counter}
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={DercCounter}>
        DecreseCounter {counter}
        </button>
      </div>
    </div>
    </>
    
  )
}

export default App
