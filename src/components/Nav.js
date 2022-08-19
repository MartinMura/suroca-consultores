import {Link} from "react-router-dom"

export default function Nav (){
    return(
        <>
            <div className='container'>
        <nav className="navbar navbar-expand-lg bg-light fixed-top ">
          <div className="container nav-h">
            <Link className="navbar-brand" to="/"><img src='./images/picwish.png' className='logo' alt="SUROCA consultores"/></Link>
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nosotros">Nosotros</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/servicios" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Servicios
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/analisis">Análisis de métodos y tiempo</Link></li>
                    <li><Link className="dropdown-item" to="/gestion">Gestión de capital humano</Link></li>
                    <li><Link className="dropdown-item" to="/optimizacion">Optimizacion de procesos</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/contacto">Contacto</a>
                </li>
                
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
        </>
    )
}