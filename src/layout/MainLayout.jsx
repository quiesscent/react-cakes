import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <>
    <NavBar/>
      <div class="layout">
        <div class="side-nav border-end h-100">
          <ul className='rm navbar-nav-scroll'>
            <li class="nav-right"><a href="/" class="nav-right">Dashboard</a></li>
            <li class="nav-right"><a href="/employees" class="nav-right">Employees</a></li>
            <li class="nav-right"><a href="/products" class="nav-right">Products</a></li>
            <li class="nav-right"><a href="/creation" class="nav-right">Create Product</a></li>
            <li class="nav-right"><a href="/sales" class="nav-right">Sales</a></li>
            <li class="nav-right"><a href="/stock" class="nav-right">Stock</a></li>
            <li class="nav-right"><a href="/inventory" class="nav-right">Inventory</a></li>
            <li class="nav-right"><a href="/orders" class="nav-right">Orders</a></li>
            <li class="nav-right"><a href="/pos" class="nav-right">POS</a></li>
          </ul>
        </div>
        <div class="content">
            <Outlet/>
            <Footer/>
        </div>
      </div>

    </>
  )
}

export default MainLayout
