import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Veiculos from './pages/veiculos'
import Funcionarios from './pages/funcionarios'
import MeusVeiculos from './pages/meus-veiculos'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/meus-veiculos" element={<MeusVeiculos />} />
      <Route path="/veiculos" element={<Veiculos />} />
      <Route path="/funcionarios" element={<Funcionarios />} />
    </Routes>
  )
}
