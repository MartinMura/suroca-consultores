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


function App() {
  return (
    <div>
      <Router>

        <Nav />
        <br />
        <div className='div-top'>

          <ScrollToTop>
            <Switch>

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/contacto">
                <Contacto />
              </Route>
              <Route path="/nosotros">
                <Nosotros />
              </Route>
          </Switch>
          </ScrollToTop>
          

        </div>
        <Footer/>
      
      </Router>
    </div>
  );
}

export default App;
