import Carousel from 'react-bootstrap/Carousel';
import Pagina from "../pagina";
import img1 from '../img/Roupas.png';
import img2 from '../img/Alimentos.png';
import img3 from '../img/Eletronicos.png';


export default function Carrocel(props){
    return(
        < Pagina >
            <h1>Produtos</h1>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </Pagina>

        
   )
}