/* eslint-disable jsx-a11y/anchor-is-valid */
import image2 from './../../assets/nike2.png'
import image3 from './../../assets/nike3.png'
import CarouselMain from './CarouselMain'
import CarouselItems from './CarouselItems'




export default function Frontpage() {
    return (
        <div className="border">
            <CarouselMain />
            <CarouselItems />
            <div style={{ background: 'linear-gradient(0deg, rgba(252,221,242,1) 15%, rgba(118,211,229, 1) 100%)', width: '90%', margin: 'auto' }}>
                <div className="row">
                    <div className="m-5 col-sm text-center position-relative">
                        <img className="" src={image2} alt="Card im" style={{ width: '100%' }} />
                        <div style={{ backgroundColor: 'white', width: '80%', transform: 'translateY(-50px)', margin: 'auto' }} className="d-flex flex-column">
                            <h5 className="mt-3">Handmade in Poland</h5>
                            <p className="text-secondary p-0">All our products are certified by TESUKI ™</p>
                            <div style={{ width: '50%', margin: 'auto', transform: 'translateY(40%)' }} className="btn btn-warning">
                                Zobacz
                            </div>
                        </div>
                    </div>
                    <div className="m-5 col-sm text-center">
                        <img className="" src={image3} alt="Card im" style={{ width: '100%' }} />
                        <div style={{ backgroundColor: 'white', width: '80%', transform: 'translateY(-50px)', margin: 'auto' }} className="d-flex flex-column">
                            <h5 className="mt-3">Handmade in Poland</h5>
                            <p className="text-secondary p-0">All our products are certified by TESUKI ™</p>
                            <div style={{ width: '50%', margin: 'auto', transform: 'translateY(40%)' }} className="btn btn-warning">
                                Zobacz
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}