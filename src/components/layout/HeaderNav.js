import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <div>
      <header className='header'>
       
        <div className='logo'>
           <span>B</span>
           <h3>Baylis Brungger WEB</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <NavLink to='/Inicio' className={({isActive}) => isActive ? 'active': ''}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/portafolio' className={({isActive}) => isActive ? 'active': ''}>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to='/servicios' className={({isActive}) => isActive ? 'active': ''} >Servicios</NavLink>
                </li>
                <li>
                    <NavLink to='/curriculum' className={({isActive}) => isActive ? 'active': ''}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto' className={({isActive}) => isActive ? 'active': ''}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderNav
