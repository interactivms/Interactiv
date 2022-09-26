import React from 'react'
import WhiteLogo from '../public/assets/img/WhiteLogo.png'
function Footer() {
  return (
    <div className="row mx-0 bg-dark py-4">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center">
        <img className='whiteLogo' src="/assets/img/WhiteLogo.png"alt="" />
        <br />  
        <a className='white' href="">Aviso de Privacidad</a>
      </div>
    </div>
  )
}

export default Footer