import React from 'react'
import '../assets/css/nav.css'
import '../assets/js/performancechart'
const Dashboard = () => {
  return (
    <>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
            <div class="card">
            <div class="card-body">
                <div class="top">
                <h5>$120944</h5>
                <small>Total Purchase Due</small>
                </div>
                <div class="bott" align="right">
                <i class='bx bxs-purchase-tag-alt' style={{fontSize: '40px'}}></i>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
            <div class="card-body">
                <div class="top">
                <h5>$1214</h5>
                <small>Total Sales</small>
                </div>
                <div class="bott" align="right">
                <i class='bx bx-money' style={{fontSize: '40px'}} ></i>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
            <div class="card-body">
                <div class="top">
                <h5>$12055</h5>
                <small>Total Sales Amount</small>
                </div>
                <div class="bott" align="right">
                <i class='bx bx-trending-up' style={{fontSize: '40px'}}></i>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
            <div class="card-body">
                <div class="top">
                <h5>$12044</h5>
                <small>Total Expenses Amount</small>
                </div>
                <div class="bott" align="right">
                <i class='bx bx-trending-down' style={{fontSize: '40px'}}></i>
                </div>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card btm-card" style={{backgroundColor: '#d97d04'}}>
            <div class="card-body">
                <div class="top">
                <h5>944</h5>
                <small>Cusomers</small>
                </div>
                <div class="bott" align="right">
                <i class='bx bx-user' style={{fontSize: '60px'}}></i>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card btm-card" style={{backgroundColor: '#026148'}}>
            <div class="card-body">
                <div class="top">
                <h5>424</h5>
                <small>Suppliers</small>
                </div>
                <div class="bott" align="right">
                <i class='bx bx-user-check' style={{fontSize: '60px'}} ></i>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card btm-card" style={{backgroundColor: '#391866'}}>
            <div class="card-body">
                <div class="top">
                <h5>100</h5>
                <small>Purchase Invoice</small>
                </div>
                <div class="bott" align="right">
                <i class='bx bxs-receipt' style={{fontSize: '60px'}}></i>
                </div>
            </div>
            </div>
        </div>
        <div class="col">
        <div class="card btm-card" style={{backgroundColor: 'green'}}>
            <div class="card-body">
                <div class="top">
                <h5>54</h5>
                <small>Sales Invoice</small>
                </div>
                <div class="bott" align="right">
                <i class='bx bx-credit-card-front' style={{fontSize: '60px'}}></i>
                </div>
            </div>
            </div>
        </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-7">
        <div class="card mychart">
        <div class="card-header">
            <div class="one">
            Purchase & Sales
            </div>
        </div>
        <div class="card-body">
            <canvas id="myChart" class="mychart"></canvas>
        </div>
        </div>
    </div>
    <div class="col-md-5">
        <div class="card">
        <div class="card-header">
            <div class="one">
            Products
            </div>
            <div class="two" align="right">
            View All <span class=""><i class='bx bx-chevrons-right '></i></span>
            </div>
        </div>
        <div class="card-body">
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">In Stock</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Red Velvet Cake</td>
                <td>5</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Black Forest</td>
                <td>10</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Swiss Roll</td>
                <td>15</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Peanut Cake</td>
                <td>8</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Chocolate Fudge</td>
                <td>2</td>
            </tr>
            </tbody>
        </table>
        </div>
        </div>
    </div>
    </div>
    <div class="container">
    <h5 class="mt-3">Employees</h5>
    <table class="table table-hover table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Position</th>
        <th scope="col">ID</th>
        <th scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>King Doe</td>
        <td>001</td>
        <td>Cakes</td>
        <td>20</td>
        <td>
            <div class="top-section">
            <span class="btn"><i class='bx bx-edit' ></i></span>
            <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
        </td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>John Doe</td>
        <td>002</td>
        <td>Cakes</td>
        <td>20</td>
        <td>
            <div class="top-section">
            <span class="btn"><i class='bx bx-edit' ></i></span>
            <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
        </td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Jane Doe</td>
        <td>003</td>
        <td>Cakes</td>
        <td>20</td>
        <td>
            <div class="top-section">
            <span class="btn"><i class='bx bx-edit' ></i></span>
            <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
        </td>
        </tr>
        <tr>
        <th scope="row">4</th>
        <td>June Doe</td>
        <td>004</td>
        <td>Cakes</td>
        <td>20</td>
        <td>
            <div class="top-section">
            <span class="btn"><i class='bx bx-edit' ></i></span>
            <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
        </td>
        </tr>
        <tr>
        <th scope="row">5</th>
        <td>Tate Doe</td>
        <td>005</td>
        <td>Cakes</td>
        <td>20</td>
        <td>
            <div class="top-section">
            <span class="btn"><i class='bx bx-edit' ></i></span>
            <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
        </td>
        </tr>
    </tbody>
    </table>
    </div>
    </>
  )
}

export default Dashboard
