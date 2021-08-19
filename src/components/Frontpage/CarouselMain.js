import image1 from './../../assets/nike1.png'
import image2 from './../../assets/nike2.png'
import image3 from './../../assets/nike3.png'
import { useState } from 'react';

const styles = {
    center: {
        zIndex: 333,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -60%)',
        textAlign: 'center',
    }
}

export default function CarouselMain() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        index === 0 ? setIndex(2) : setIndex(index - 1)
    };
    const nextSlide = () => {
        index === 2 ? setIndex(0) : setIndex(index + 1)
    };

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ position: 'relative' }}>
            <div style={styles.center}>
                <h1 className="text-white font-weight-bold">4-CMC EMBROIDERED HOODIE FREE</h1>
                <div className="btn btn-outline-warning text-center mr-2">SHOP MEN</div>
            </div>
            <ol className="carousel-indicators">
                <li className={`${index === 0 ? 'active' : null}`}></li>
                <li className={`${index === 1 ? 'active' : null}`}></li>
                <li className={`${index === 2 ? 'active' : null}`}></li>
            </ol>
            <div className="carousel-inner" style={{ height: "500px" }}>
                <div className={`carousel-item d-flex ${index === 0 ? 'active' : ''}`}>
                    <img className="d-block w-50" src={image1} alt="First slide" />
                    <img className="d-block w-50" src={image2} alt="First slide" />
                </div>
                <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
                    <img className="d-block w-100" src={image3} alt="Second slide" />
                </div>
                <div className={`carousel-item ${index === 2 ? 'active' : ''}`}>
                    <img className="d-block w-100" src={'https://yt3.ggpht.com/ytc/AKedOLSPMCZqR0oBCe6-YwdHkcbDWfT3zEPVYOAfc3fZaw=s48-c-k-c0x00ffffff-no-rj'} alt="Third slide" />
                </div>

            </div>
            <div className="carousel-control-prev" onClick={prevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </div>
            <div className="carousel-control-next" onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </div>
        </div>

    )
}