import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeDashboard from './components/layout/HomeDashboard'
import LoginPage from './components/layout/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <HomeDashboard /> */}
     <LoginPage />
    </>
  )
}

export default App
