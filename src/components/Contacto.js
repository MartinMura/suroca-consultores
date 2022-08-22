import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2zljphk', 'template_059r5ls', form.current, 'A5S34ztjXWYEnMRDY')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                e.target.reset();

            }, (error) => {
                console.log(error.text);
            });
        };
    return(
        
        <div className='home-width'>  
            <div className="container bg-secondary text-light my-5 container-form">

                <div className="contacto-text">
                    <h1>Contacto</h1>
                    <p>Llamanos o envianos tu consulta y nos contactaremos a la brevedad.</p>
                </div>
                <form className="container px-5 py-3" ref={form} onSubmit={sendEmail}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput2" class="form-label">Nombre y Apellido</label>
                        <input type="text" class="form-control" name='user_name' id="exampleFormControlInput2" placeholder="Juan Pérez"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Teléfono de contacto</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" name='user_phone' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Dirección de correo electrónico</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='user_email'/>
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
                    </div>
                    <input type="submit" class="btn btn-light boton-enviar" value="Send"/>
                </form>
            </div>
        </div>
    )
}