import React from 'react'
import { Link } from 'react-router-dom'

const Pos = () => {
  return (
    <>
    <div class="top-section container">
  <div class="sect-1">
    <Link to="" class="btn btn-primary">View Orders</Link>
    <Link to="" class="btn btn-secondary">Checkout</Link>
  </div>
</div>
<div class="container">
	<div class="top-section mt-5">
		<div class="sect1">
			<h4> Orders List </h4>
			<ol class="list-group list-group-flush list-group-numbered">
			  <li class="list-group-item"><br/>
			  	<div class="order">
				  	<div class="sect">
				  	Susan Kamau <br/>
				  	Jomatech Technologies <br/>
				  	Black Forest Cake 4KG <br/>
				  	Cost <br/>
				  	Paid <br/>
				  	</div>
				  	<div class="sect2" align="right">
				  		Status<br/>
				  		Cooking <i class="bx bx-bowl-hot" style={{color:'red'}}></i><br/>
				  	</div>
			  	</div>
			  </li>
			</ol>
		</div>
		&nbsp;&nbsp;
		<div class="sect-2">
			<h4>Create Order & Instant Checkout</h4>
			<form class="row g-3" method="POST" action="{% url 'receipt' %}">
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
			    <button type="submit" class="btn btn" style={{backgroundColor: 'sandybrown'}}>Generate Receipt</button>
			  </div>
			</form>
		</div>
	</div>
</div>

    </>
  )
}

export default Pos
