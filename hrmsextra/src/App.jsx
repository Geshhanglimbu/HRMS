import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from "react-router-dom"
import LoginForm from './pages/login'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Employeeform from './pages/employee'
import EmployeeCard from './components/employees/employeecard'

function App() {
  const[count,setCount]=useState(0)
  return (
    <>
     <Routes>
      <Route path="/" element={<LoginForm />} /><Route/>
      <Route path="Home" element ={<Home/>}>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="employee" element={<Employeeform/>}/>
      </Route>

     </Routes>
    </>
  )
}

export default App
