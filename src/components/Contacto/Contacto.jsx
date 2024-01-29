import React from 'react'
import './Contacto.css'



const Contacto = () => {
  return (
    <>
      <section className="d-flex container justify-content-center align-items-center text-light">
       <section className="justify-content-center my-2 py-2">
          <h2 className="text-center mb-4">¡CONTACTA CON NOSOTROS!</h2>
          <h4 className='text-center mb-4'>En nuestro deseo de atenderles mejor, ponemos a su disposición el siguiente formulario para que contacte directamente con nuestros departamentos.</h4>
          <br></br>
          <hr></hr>
          <h3>Departamentos</h3>
         <div class="container text-center">
            <div class="row">
              <div class="col">
                <label className="form-check-label">Informacion sobre reservas</label>
                <input type="checkbox" value="" class="form-check-input" required></input>
              </div>
             <div class="col">
               <label className="form-check-label">Informacion sobre nuestros hoteles</label>
               <input type="checkbox" value="" class="form-check-input" required></input>
             </div>
             <div class="col">
               <label className="form-check-label">Sugerencias y comentarios </label>
               <input type="checkbox" value="" class="form-check-input" required></input>
             </div>
           </div>
         </div>
         <br></br>
         <hr></hr>
         <h3>Datos Personales</h3>
         <br></br>
         <form className="align-items-center justify-content-center w-50">
           <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="name" maxlength="25" minlength="4" className="form-control" id="nombre" value="" required></input>
           </div>
           <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" maxlength="40" minlength="4" className="form-control" id="email" aria-describedby="emailHelp" value=""></input>
           </div>
           <div className="pb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Escribe un mensaje</label>
             <input className="form-control" id="mensaje" rows="3"></input>
           </div>
           <button type="button" className="btn btn-secondary" onclick="enviarMail()">Enviar consulta</button>
         </form>
       </section>
     </section>
    
    </>
  )
}

export default Contacto
