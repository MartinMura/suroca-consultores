import { Link } from "react-router-dom";
import { FaRobot, FaRoute, FaRegHourglass } from "react-icons/fa";

export default function Servicios(){
    return (
        <>
        <div className="servicios-container container p-4">

            <h1 className="servicios-title text-black">Servicios</h1>
            <section class="container d-flex justify-content-around flex-wrap">
                <div class="card m-3" >
                        <Link to="/gestion" style={{textDecoration:"none", color:"black"}}>
                    <div className="card-body">
                        <FaRegHourglass style={{fontSize: "50px", position:"relative",left:"40%", marginBottom:"20px"}}/>
                        <h5 class="card-title">Gestión de capital Humano</h5>
                        <p class="card-text text-center">El equipo de trabajo es lo más importante para lograr los objetivos de las empresas.</p>
                        <button  class="btn btn-primary">+info</button>
                    </div>
                        </Link>
                </div>
                <div class="card m-3" >
                        <Link to="/analisis" style={{textDecoration:"none", color:"black"}}>
                    <div className="card-body">
                        <FaRoute style={{fontSize: "50px", position:"relative",left:"40%", marginBottom:"20px"}}/>
                        <h5 class="card-title">Análisis de métodos y tiempos</h5>
                        <p class="card-text text-center">Evaluamos los métodos y tiempos utilizados para cada una de las etapas que conforman el proceso productivo</p>
                        <button  class="btn btn-primary">+info</button>
                    </div>
                        </Link>
                </div>
                <div class="card m-3" >
                        <Link to="/optimizacion" style={{textDecoration:"none", color:"black"}}>
                    <div className="card-body">
                        <FaRobot style={{fontSize: "50px", position:"relative",left:"40%", marginBottom:"20px"}}/>
                        <h5 class="card-title">Optimizacion de procesos</h5>
                        <p class="card-text text-center">Analizamos todos los procesos para detectar las oportunidades de mejora, reduciendo costos</p>
                        <button  class="btn btn-primary">+info</button>
                    </div>
                        </Link>
                </div>
                
                    
            </section>
        </div>
        </>
    )
}