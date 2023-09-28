import React from 'react'

const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:jbrungger@gmail.com'>
        <input type='text' placeholder='nombre' />
        <input type='text' placeholder='apellido'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Motivo de conntacto'/>
        <input type='submit'  value='Enviar'/>
      </form>
    </div>
  )
}

export default Contacto;
