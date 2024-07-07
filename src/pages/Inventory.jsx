import React from 'react'

const Inventory = () => {
  return (
    <>
      <div class="sect-1">
    <h5>Inventory Management</h5>
    <small>Check your inventory</small>
  </div>
    <div class="container mt-3">
          <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '300px'}}/>
                <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
      <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Code</th>
          <th scope="col">Category</th>
          <th scope="col">Buying Price</th>
          <th scope="col">Selling Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Butter Cake</td>
          <td>001</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
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
          <td>Sponge Cake</td>
          <td>002</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
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
          <td>Angel Food Cake</td>
          <td>003</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
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
          <td>Chiffon Cake</td>
          <td>004</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
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
          <td>Bundt Cake</td>
          <td>005</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
          <td>20</td>
          <td>
            <div class="top-section">
              <span class="btn"><i class='bx bx-edit' ></i></span>
              <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Fruit Cake</td>
          <td>006</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
          <td>20</td>
          <td>
            <div class="top-section">
              <span class="btn"><i class='bx bx-edit' ></i></span>
              <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Carrot Cake</td>
          <td>007</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
          <td>20</td>
          <td>
            <div class="top-section">
              <span class="btn"><i class='bx bx-edit' ></i></span>
              <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Red Velvet Cake</td>
          <td>008</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
          <td>20</td>
          <td>
            <div class="top-section">
              <span class="btn"><i class='bx bx-edit' ></i></span>
              <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Opera Cake</td>
          <td>009</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
          <td>20</td>
          <td>
            <div class="top-section">
              <span class="btn"><i class='bx bx-edit' ></i></span>
              <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>Black Forest Cake</td>
          <td>010</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
          <td>20</td>
          <td>
            <div class="top-section">
              <span class="btn"><i class='bx bx-edit' ></i></span>
              <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td>Gateau St.Honore</td>
          <td>011</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
          <td>20</td>
          <td>
            <div class="top-section">
              <span class="btn"><i class='bx bx-edit' ></i></span>
              <span class="btn"><i class='bx bx-trash' ></i></span>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">12</th>
          <td>Flour Chocolate Cake</td>
          <td>012</td>
          <td>Cakes</td>
          <td>30000</td>
          <td>40000</td>
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

export default Inventory
