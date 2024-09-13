import { useState } from 'react'


function App() {
  const [color , setColor] = useState('#0000')
  
  
  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : color }}>
      <div>
        <h1>
          hello
        </h1>
      </div>
    
     
    </div>
  )
}

export default App
