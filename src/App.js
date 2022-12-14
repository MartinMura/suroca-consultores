/* react-router-dom */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

/* components */
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contacto from "./components/Contacto"
import Nosotros from './components/Nosotros.js';
import ScrollToTop from './components/ScrollToTop.js';
import Optimizacion from './components/Optimizacion.js';
import Analisis from './components/Analisis.js';
import Gestion from './components/Gestion.js';
import NewHome from "./components/NewHome"


function App() {
  return (
    <div>
      <Router>

        <Nav />
        <br />
        {/* <Switch>
          
        </Switch> */}
        
          <ScrollToTop>
            <Switch>
            <Route exact path="/">
              <NewHome />
          </Route>
        <div className='div-top'>
              
              
              <Route path="/contacto">
                <Contacto />
              </Route>
              <Route path="/nosotros">
                <Nosotros />
              </Route>
              <Route path="/optimizacion">
                <Optimizacion />
              </Route>
              <Route path="/analisis">
                <Analisis />
              </Route>
              <Route path="/gestion">
                <Gestion />
              </Route>
        </div>
          </Switch>
          </ScrollToTop>
          

        <Footer/>
      
      </Router>
    </div>
  );
}

export default App;
