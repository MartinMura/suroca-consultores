import { Link } from "react-router-dom";

export default function Gestion(){
    return(
        <>
            <div className="home-width">
                <br/>
                <br/>
                <div className="miembros">
                    <h3 className="member-nombre text-center my-2">
                        GESTIÓN DE CAPITAL HUMANO
                    </h3>
                    <br/>

                    <p className="member-description">En Suroca, estamos convencidos que para lograr la excelencia en todos los aspectos de las Organizaciones, es primordial comenzar por la conformación de excelentes equipos de trabajo.
                    Por tal motivo,  incorporamos la unidad de negocios de Gestión de Personas, donde ayudamos a nuestros clientes en la búsqueda y selección de colaboradores, con el propósito de desarrollar equipos de alto potencial técnico y humano, sin perder el foco en la mejora continua.</p>
                </div>

                <div className="container contactanos align-items-center text-bg-secondary">
                    <div className="d-flex justify-content-around align-items-center ">

                        <p className="contact-p-servicios">¿Necesitás ayuda?
                        Analizamos todo tipo de problemas y encontramos las soluciones.</p>
                        <Link to="/contacto">
                        <button type="button" className="contact-btn btn btn-danger ">
                            Contáctanos
                        </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}