import {Link} from "react-router-dom"

export default function Contactanos(){
    return(
        <>
            <div className="container contactanos align-items-center text-bg-secondary">
                <div className="d-flex justify-content-around align-items-center ">

                    <p className="contact-p">Logramos que tu empresa sea sostenible y adaptable en el tiempo, generándote competitividad en el mercado</p>
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