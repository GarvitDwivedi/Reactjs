import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  return (
   <>
   <Card title = "Basic" amount1 ="500" amount2 = "300" amount3 ="400" />
   <Card title = "Pro" amount1 ="1100" amount2 = "3040" amount3 ="4010" />
   </>
  )
}

export default App
