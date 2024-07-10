import React from 'react'

const SalesReport = () => {
  return (
    <>
    <div class="container mt-5">
	<div class="top-section">
		<div class="sect-1">
			Sales Record
		</div>
		<div class="sect-2" align="right">
			<a href="" class="btn"> Filter by Day</a>
		</div>
	</div>
	<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Code</th>
      <th scope="col">Category</th>
      <th scope="col">Sold</th>
      <th scope="col">Selling Price</th>
      <th scope="col">Cash In</th>
      <th scope="col">Remaining</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Butter Cake</td>
      <td>001</td>
      <td>Cakes</td>
      <td>2</td>
      <td>20000</td>
      <td>20000</td>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sponge Cake</td>
      <td>002</td>
      <td>Cakes</td>
      <td>5</td>
      <td>20000</td>
      <td>20000</td>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Angel Food Cake</td>
      <td>003</td>
      <td>Cakes</td>
      <td>7</td>
      <td>20000</td>
      <td>20000</td>
      <td>6</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Chiffon Cake</td>
      <td>004</td>
      <td>Cakes</td>
      <td>9</td>
      <td>20000</td>
      <td>20000</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Bundt Cake</td>
      <td>005</td>
      <td>Cakes</td>
      <td>1</td>
      <td>20000</td>
      <td>20000</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Fruit Cake</td>
      <td>006</td>
      <td>Cakes</td>
      <td>3</td>
      <td>20000</td>
      <td>20000</td>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Carrot Cake</td>
      <td>007</td>
      <td>Cakes</td>
      <td>8</td>
      <td>20000</td>
      <td>20000</td>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Red Velvet Cake</td>
      <td>008</td>
      <td>Cakes</td>
      <td>6</td>
      <td>20000</td>
      <td>20000</td>
      <td>6</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Opera Cake</td>
      <td>009</td>
      <td>Cakes</td>
      <td>2</td>
      <td>20000</td>
      <td>20000</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Black Forest Cake</td>
      <td>010</td>
      <td>Cakes</td>
      <td>3</td>
      <td>20000</td>
      <td>20000</td>
      <td>4</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>Gateau St.Honore</td>
      <td>011</td>
      <td>Cakes</td>
      <td>5</td>
      <td>20000</td>
      <td>20000</td>
      <td>4</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Flour Chocolate Cake</td>
      <td>012</td>
      <td>Cakes</td>
      <td>5</td>
      <td>20000</td>
      <td>20000</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>
    </>
  )
}

export default SalesReport
