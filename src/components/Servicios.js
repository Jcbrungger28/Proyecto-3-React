import React from 'react'

const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicio</h1>

      <section className='services'>
        <article className='service'>
          <h2>Diseño web</h2>
          <p>Hago que tu web se vea bonita</p>
        </article>

        <article className='service'>
             <h2>Desarrolo web</h2>
             <p>Creo tu pagina web desde cero</p>
        </article>

        <article className='service'>
          <h2>Posicionamiento web</h2>
          <p>Hago que tu web aparezca en Google y la vean personas</p>

        </article>
      </section>
    </div>
  )
}

export default Servicios
