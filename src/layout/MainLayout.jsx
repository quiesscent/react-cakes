import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <>
    <NavBar/>
      <div class="layout">
        <div class="side-nav border-end h-100">
          <ul className='rm navbar-nav-scroll'>
            <li class="nav-right"><Link to="/" class="nav-right">Dashboard</Link></li>
            <li class="nav-right"><Link to="/employees" class="nav-right">Employees</Link></li>
            <li class="nav-right"><Link to="/products" class="nav-right">Products</Link></li>
            <li class="nav-right"><Link to="/creation" class="nav-right">Create Product</Link></li>
            <li class="nav-right"><Link to="/sales" class="nav-right">Sales</Link></li>
            <li class="nav-right"><Link to="/stock" class="nav-right">Stock</Link></li>
            <li class="nav-right"><Link to="/inventory" class="nav-right">Inventory</Link></li>
            <li class="nav-right"><Link to="/orders" class="nav-right">Orders</Link></li>
            <li class="nav-right"><Link to="/pos" class="nav-right">POS</Link></li>
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
