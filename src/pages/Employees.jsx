import React from 'react'
import '../assets/css/common.css'

const Employees = () => {
  return (
    <>
    <div class="top-section container">
  <div class="sect-1">
    <h5>Employee Management</h5>
    <small>Manage your employees</small>
  </div>
  <div class="sect-2" align="right">
    <h5>Add Employee</h5>
  </div>
</div>
<div class="container mt-2">
  <div class="top-section">
    <div class="sect-1">
      <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '300px'}}/>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  </div>
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
      <td>info@employee.co.ke</td>
      <td>Cook</td>
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
      <td>info@employee.co.ke</td>
      <td>Cook</td>
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
      <td>info@employee.co.ke</td>
      <td>Cook</td>
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
      <td>info@employee.co.ke</td>
      <td>Cook</td>
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
      <td>info@employee.co.ke</td>
      <td>Cook</td>
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

export default Employees
