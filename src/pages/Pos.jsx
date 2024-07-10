import React from 'react'
import { Link } from 'react-router-dom'

const Pos = () => {
  return (
    <>
    <div class="top-section container">
</div>
<div class="container">
	<div class="top-section mt-5">
		<div class="sect1">
			<h4> Product List</h4>
			<table class="table table-hover">
				<thead>
				  <tr>
					<th scope="col">#</th>
					<th scope="col">Product</th>
					<th scope="col">Code</th>
					<th scope="col">Quantity</th>
					<th scope="col">Category</th>
					<th scope="col">Status</th>
				  </tr>
				</thead>
				<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Black Forest</td>
					<td>003</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Danger Zone</td>
				  </tr>
				  <tr>
					<th scope="row">2</th>
					<td>Sponge Cake</td>
					<td>003</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Danger Zone</td>
				  </tr>
				  <tr>
					<th scope="row">3</th>
					<td>Angel Food Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Out of Stock</td>
				  </tr>
				  <tr>
					<th scope="row">4</th>
					<td>Chiffon Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				  <tr>
					<th scope="row">5</th>
					<td>Bundt Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				  <tr>
					<th scope="row">6</th>
					<td>Fruit Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				  <tr>
					<th scope="row">7</th>
					<td>Carrot Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				  <tr>
					<th scope="row">8</th>
					<td>Red Velvet Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				  <tr>
					<th scope="row">9</th>
					<td>Opera Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				  <tr>
					<th scope="row">10</th>
					<td>Black Forest Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				  <tr>
					<th scope="row">11</th>
					<td>Gateau St.Honore</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				  <tr>
					<th scope="row">12</th>
					<td>Flour Chocolate Cake</td>
					<td>001</td>
					<td>4</td>
					<td>Cakes</td>
					<td>Available</td>
				  </tr>
				</tbody>
			  </table>
		</div>
		&nbsp;&nbsp;
		<div class="sect-2">
			<h4>Create Order & Instant Checkout</h4>
			<form class="row g-3">
			  <div class="col-md-12">
			    <input type="text" class="form-control" placeholder="Customer Name" aria-label="" name="customername"/>
			  </div>
			  <div class="col-md-12">
			  	<input type="text" class="form-control" placeholder="Customer Order" aria-label="" name="customerorder"/>
			  </div>
			  <div class="col-md-12">
			    <input type="text" class="form-control" placeholder="Quantity" aria-label="" name="quantity"/>
			  </div>
			  <div class="col-md-12">
			    <input type="number" class="form-control" placeholder="Units in kg" aria-label="" name="units"/>
			  </div>
			  <div class="col-md-6">
			    <input type="number" class="form-control" placeholder="Amount" aria-label="" name="amount"/>
			  </div>
			  <div class="col-md-6">
			    <input type="number" class="form-control" placeholder="Discount" aria-label="" name="discount"/>
			  </div>
			  <div class="col-12 text-center">
			    <button type="button" class="btn btn" style={{backgroundColor: 'sandybrown'}}>Generate Receipt</button>
			  </div>
			</form>
		</div>
	</div>
</div>

    </>
  )
}

export default Pos
