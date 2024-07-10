import React from 'react'
import '../assets/css/nav.css'
const NavBar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand position-absolue" href="/">
      {/* <img src="{% static 'img/logo.png' %}" height="50" class="position-absolue" /> */}
      <span class="brand">Cook<span class="brand-2">Sasa</span></span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-lg-0 nav-display">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <ul class="navbar-nav mb-lg-0 nav-display2">
        <li class="nav-item dropdown dropstart nav-display2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="/logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
