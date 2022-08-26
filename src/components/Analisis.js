import { Link } from "react-router-dom";

export default function Analisis(){
    return(
        <>
            <div className="home-width">
                <br/>
                <br/>
                <div className="miembros">
                    <h3 className="member-nombre text-center my-2">
                        ANÁLISIS DE MÉTODOS Y TIEMPOS
                    </h3>
                    <br/>

                    <p className="member-description">El estudio consiste en el análisis de los métodos utilizados y valoración del tiempo empleado para cada una de las etapas que conforman el proceso productivo o prestación de servicio.
                    A partir del estudio de la empresa se podrá conocer:
                    Capacidad de los procesos
                    Cuellos de botella de la operación
                    Medición de carga de trabajo de cada estación de trabajo
                    Propuesta de acciones de mejora que aumenten la productividad
                    Conocer los recursos que necesita para realizar una fabricación determinada o prestación de servicio</p>
                    
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