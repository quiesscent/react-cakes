import React from 'react'
import '../assets/css/common.css'

const Creation = () => {
  return (
    <>
    <div class="top-section container">
      <div class="sect-1">
        <h5>New Product</h5>
        <small>Create new product</small>
      </div>
      <div class="sect-2" align="right">
        <a href="" class="btn btn-outline-success">Back to products</a>
      </div>
    </div>

    <div class="container border rounded">
      <div class=" border-bottom p-2">
        Product information
      </div>

      <div class="container mt-4">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputtext4" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="inputtext4"/>
          </div>
          <div class="col-md-6">
            <label for="inputcode4" class="form-label">Product Code</label>
            <input type="text" class="form-control" id="inputcode4"/>
          </div>
          <div class="col-md-6">
            <label for="inputtext4" class="form-label">Brand</label>
            <input type="text" class="form-control" id="inputtext4"/>
          </div>
          <div class="col-md-6">
            <label for="inputtext4" class="form-label">Unit</label>
            <input type="text" class="form-control" id="inputtext4"/>
          </div>
          <div class="col-md-6">
            <label for="inputnumber" class="form-label">Buying Price</label>
            <input type="number" class="form-control" id="inputnumber"/>
          </div>
          <div class="col-md-6">
            <label for="inputnumber" class="form-label">Selling Price</label>
            <input type="number" class="form-control" id="inputnumber"/>
          </div>

          <div class="col-md-6">
            <label for="inputState" class="form-label">Category</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="inputnumber" class="form-label">Quantity</label>
            <input type="number" class="form-control" id="inputnumber"/>
          </div>
          <div class="col-md-12">
            <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

          </div>
          <div class="col-12 mb-3 text-center">
            <button type="submit" class="btn ">Create</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Creation
