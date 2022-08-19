import { Link } from "react-router-dom";

export default function Optimizacion(){
    return(
        <>
            <div className="home-width">
                <br/>
                <br/>
                <div className="miembros">
                    <h3 className="member-nombre text-center my-2">
                        Optimizacion de procesos
                    </h3>
                    <br/>

                    <p className="member-description">Evaluamos junto a nuestro cliente la situación actual de los procesos que componen su cadena de valor, definiendo: Cuáles son los desvíos que poseen sus procesos respecto a sus planes estratégicos y operativos. Cuáles son los puntos críticos que afectan los niveles de calidad y productividad de la organización.
                    Qué procesos deben ser cuidados para alcanzar los niveles de satisfacción deseados por el cliente final.
                    Las acciones tomadas para desarrollar las oportunidades de mejoras detectadas permitirán obtener resultados que apunten a incrementar los márgenes de rentabilidad de los negocios, y crear en las empresas condiciones de flexibilidad que acompañen los cambios que plantea el mercado.</p>
                    
                </div>

                <div className="container contactanos align-items-center text-bg-secondary">
                    <div className="d-flex justify-content-around align-items-center ">

                        <p className="contact-p">¿Necesitás ayuda?
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