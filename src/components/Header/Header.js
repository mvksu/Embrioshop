import { Link } from "react-router-dom"
import Navbar from './Navbar/Navbar'

export default function Header() {
    return (
        <>
            <h4 style={{ background: 'linear-gradient(90deg, rgba(252,221,242,1) 34%, rgba(147,194,124,1) 100%)' }} className='text-center text-white font-weight-bold p-1 m-0'>Get 30% discount on promo code: hajduszoboszlo</h4>
            <div className="sticky-top">
                <div className={` d-flex justify-content-between bg-white flex-wrap`}>
                    <div className="m-3">
                        <Link to="/">
                            <h2 style={{ fontFamily: 'Ahsing', color: 'rgba(147,194,124,1)' }}>Embrioshop</h2>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                        <Link to="/login" className="d-flex align-items-center mx-3">
                            <h5 className="m-2" style={{ color: 'rgba(147,194,124,1)' }}>ACCOUNT</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="rgba(147,194,124,1)" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg>
                        </Link>
                        <Link to="/cart" className="d-flex align-items-center mr-3">
                            <h5 className="m-2" style={{ color: 'rgba(147,194,124,1)' }}>CART</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="rgba(147,194,124,1)" className="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <Navbar />
            </div>
        </>
    )
}