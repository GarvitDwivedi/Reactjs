import { useState } from 'react'
import { document } from 'postcss';

function App() {
  const[color , setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor : color}}
    >
         <div style={{ backgroundColor: color }} className="fixed bottom-0 w-full flex justify-center p-4 bg-gray-100">
            <button onClick={() => setColor('red')} className="bg-red-600 rounded-2xl ml-2 mr-2 p-2 text-white">Red</button>
            <button onClick={() => setColor('green')} className="bg-green-600 rounded-2xl ml-2 mr-2 p-2 text-white">Green</button>
            <button onClick={() => setColor('blue')} className="bg-blue-600 rounded-2xl ml-2 mr-2 p-2 text-white">Blue</button>
            <button onClick={() => setColor('black')} className="bg-black rounded-2xl ml-2 mr-2 p-2 text-white">Black</button>
            <button onClick={() => setColor('pink')} className="bg-pink-600 rounded-2xl ml-2 mr-2 p-2 text-white">Pink</button>
            <button onClick={() => setColor('purple')} className="bg-purple-900 rounded-2xl ml-2 mr-2 p-2 text-white">Purple</button>
            <button onClick={() => setColor('gray')} className="bg-gray-600 rounded-2xl ml-2 mr-2 p-2 text-white">Gray</button>
        </div>
    </div>
   
  )
}

export default App



/* <div class="relative h-full">
<div class="absolute bottom-100">
<div className='bg-gray-400 mt-4 mb-4  align-middle'>
    <button  className='bg-red-600 rounded-2xl ml-2 mr-2'>Red</button>
    <button className='bg-green-600 rounded-2xl ml-2 mr-2'>Greeen</button>
    <button className='bg-blue-600 rounded-2xl ml-2 mr-2'>Blue</button>
    <button className='bg-black rounded-2xl ml-2 mr-2  text-white'>Black</button>
    <button className='bg-pink-600 rounded-2xl ml-2 mr-2'>Pink</button>
    <button className='bg-purple-600 rounded-2xl ml-2 mr-2'>Purple</button>
    <button className='bg-gray-600 rounded-2xl ml-2 mr-2'>Gray</button>
  </div>
 */