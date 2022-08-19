import {Link} from "react-router-dom"

export default function Contactanos(){
    return(
        <>
            <div className="container contactanos align-items-center text-bg-secondary">
                <div className="d-flex justify-content-around align-items-center ">

                    <p className="contact-p">Incrementamos los niveles de productividad y calidad para mejorar tu competitividad y generar valor a tus clientes.</p>
                    <Link to="/contacto">
                    <button type="button" className="contact-btn btn btn-danger ">
                        Contáctanos
                    </button>
                    </Link>

                </div>

                    
                
            </div>

        </>
    )
}