import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import './assets/js/performancechart.js'
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Creation from './pages/Creation.jsx';
import Employees from './pages/Employees.jsx';
import Inventory from './pages/Inventory.jsx';
import Stock from './pages/Stock.jsx';
import Products from './pages/Products.jsx';
import Sales from './pages/Sales.jsx'
import Pos from './pages/Pos.jsx';
import Orders from './pages/Orders.jsx';
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home/>}/>
            <Route path='/creation' element={<Creation/>}/>
            <Route path='/employees' element={<Employees/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/stock' element={<Stock/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/sales' element={<Sales/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/pos' element={<Pos/>}/>
          </Route>
        </Routes>
      </Router>
    );
}

export default App
