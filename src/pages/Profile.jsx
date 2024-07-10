import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div class="top-section container">
	<div class="sect-1">
		<h5>Profile Information</h5>
		<small></small>
	</div>
	<div class="sect-2" align="right">
		<Link to="/" class="btn btn-outline-success">Back to Dashboard</Link>
	</div>
</div>

<div class="container border rounded mt-4">
	<div class=" border-bottom p-2">
		Admin Information
	</div>

	<div class="container mt-4 profile">
		<div class="image">
			<img src="" height="100" class="rounded" />
		</div>
		<div class="info">
			<form class="row g-3">
			  <div class="col-md-6">
			    <label for="inputtext4" class="form-label">Admin Name</label>
			    <input type="text" class="form-control" id="inputtext4" value="" name="adminname"/>
			  </div>
			  <div class="col-md-6">
			    <label for="inputcode4" class="form-label">Admin Code/ID</label>
			    <input type="text" class="form-control" id="inputcode4" value="" name="admincode"/>
			  </div>
			  <div class="col-md-6">
			    <label for="inputtext4" class="form-label">Admin Status</label>
			    <input type="text" class="form-control" id="inputtext4" value="" name="adminposition"/>
			  </div>
			  <div class="col-md-6">
			    <label for="inputtext4" class="form-label">Admin Email</label>
			    <input type="email" class="form-control" id="inputtext4" value="" name="adminemail"/>
			  </div>
			  <div class="col-md-6 mb-3">
			    <label for="inputnumber" class="form-label">Admin  Phone</label>
			    <input type="number" class="form-control" id="inputnumber" value="" name="adminphone"/>
			  </div>
			  <div class="col-md-6 text-center mb-3">
		    	<button type="button" class="btn btn-success">Update</button>
		      </div>
			</form>
		</div>
	</div>
</div>
    </>
  )
}

export default Profile
