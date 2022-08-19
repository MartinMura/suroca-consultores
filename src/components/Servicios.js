import { Link } from "react-router-dom";

export default function Servicios(){
    return (
        <>
        <div className="servicios-container container bg-secondary p-4">

            <h1 className="servicios-title text-light">Servicios</h1>
            <section class="container d-flex justify-content-around flex-wrap">
                <div class="card m-3" >
                    <div class="card-body">
                        <h5 class="card-title">Gestión de capital Humano</h5>
                        <p class="card-text text-center">El equipo de trabajo es lo más importante para lograr los objetivos de las empresas.</p>
                        <Link to="/gestion">
                        <button  class="btn btn-primary">+info</button>
                        </Link>
                    </div>
                </div>
                <div class="card m-3" >
                    <div class="card-body">
                        <h5 class="card-title">Análisis de métodos y tiempos</h5>
                        <p class="card-text text-center">Evaluamos los métodos y tiempos utilizados para cada una de las etapas que conforman el proceso productivo</p>
                        <Link to="/analisis">
                        <button  class="btn btn-primary">+info</button>
                        </Link>
                    </div>
                </div>
                <div class="card m-3" >
                    <div class="card-body">
                        <h5 class="card-title">Optimizacion de procesos</h5>
                        <p class="card-text text-center">Analizamos todos los procesos para detectar las oportunidades de mejora, reduciendo costos</p>
                        <Link to="/optimizacion">
                        <button  class="btn btn-primary">+info</button>
                        </Link>
                    </div>
                </div>
                <div class="card m-3" >
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/">
                        <button  class="btn btn-primary">+info</button>
                        </Link>
                    </div>
                </div>
                <div class="card m-3" >
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/">
                        <button  class="btn btn-primary">+info</button>
                        </Link>
                    </div>
                </div>
                <div class="card m-3" >
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/">
                        <button  class="btn btn-primary">+info</button>
                        </Link>
                    </div>
                </div>
                    
            </section>
        </div>
        </>
    )
}