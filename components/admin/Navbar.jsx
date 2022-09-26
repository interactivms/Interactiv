import React from 'react'
import {signOut} from 'next-auth/react'
import DarkLogo from '../svgs/DarkLogo'
function Navbar({user}) {
  console.log(user)
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><DarkLogo maxHeight="100px" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex align-items-center justify-content-center px-2">
          <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li className="nav-item d-flex align-items-center justify-content-center px-2">
          <a className="nav-link" href="#content">Contenido</a>
        </li>
        <li className="nav-item d-flex align-items-center justify-content-center px-2">
          <a className="nav-link" href="#testimonials">Testimonios</a>
        </li>
        <li className="nav-item d-flex align-items-center justify-content-center px-2">
          <a className="nav-link" href="#blog">Blog</a>
        </li>
        <img src={user.image} alt="" className="admin-image" />
        <li className="nav-item d-flex align-items-center justify-content-center px-2">
          <button className="nav-link signout-button" onClick={() => signOut()}>Cerrar Sesión</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar