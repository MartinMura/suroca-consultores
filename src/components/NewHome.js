import { Link } from "react-router-dom"
import Contactanos from "./Contactanos"
import Servicios from "./Servicios"
import video from "./video/stock-office-short.mp4"

export default function NewHome(){
    return(
        <>
            <div className="video">
                <p className="excelencia">EXCELENCIA PROFESIONAL</p>
                <p className="p-largo">Logramos que tu empresa sea sostenible y adaptable en el tiempo, generándote competitividad en el mercado</p>
                <video src={video} autoPlay loop muted/>
                    
                <div className="color-overlay"></div>
                <img src="/images/wave.svg" className="wave"/>
            </div>

            <div className="phrase container">
                <p>SOMOS UN EQUIPO DE PROFESIONALES MULTIDISCIPLINARIOS, CAPACES DE AYUDARTE A MEJORAR LA PRODUCCIÓN & GESTIÓN.</p>
                <br/>
                <p>TRABAJAMOS TANTO CON PYMES COMO CON GRANDES EMPRESAS.</p>
            </div>


            <Servicios />
            
            {/* <div className="container aun">
                <div className="container d-flex align-items-center justify-content-around">
                <p className="contact-p">¿Aún no nos conocés?</p>
                    <Link to="/contacto">
                    <button type="button" className="contact-btn btn btn-danger ">
                        Contáctanos
                    </button>
                    </Link>
                </div>
            </div> */}
            <Contactanos/>
        </>
    )
}