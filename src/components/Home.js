import Carousel from "./Carousel"
import Contactanos from "./Contactanos"
import Servicios from "./Servicios"
import Frases from "./Frases"
import Banners from "./Banners"

export default function Home (){
    return(
        <div className="home-width">
        
        <Carousel />
        <br/>
        <Contactanos/>
        <br/>
        <Banners/>
        <br/>
        <Servicios/>
        <br/>
        <Frases/>
        
        </div>
    )
}