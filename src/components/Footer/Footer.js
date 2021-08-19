/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Footer.module.css'
export default function Footer() {
    return (
        <footer className="text-lg-start text-white position-relative p-0 m-auto" style={{width: '80%'}}>
            <section className="p-1" style={{ background: 'rgba(118,211,229, 1)' }}>
                <div className="text-md-start mt-5 ml-5">
                    <div className="row mt-3">
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Hoodies</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Tees</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Caps</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">All</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope mx-1"></i>
                                embrioshop@malpasledz.pl
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +48 666 420 666</p>
                            <p><i className="fas fa-print me-3"></i> +48 69 88 44 420</p>
                        </div>

                        {/* <div className={`col-md-4 col-lg-4 col-xl-4 text-white text-center p-0`}>
                                <div>
                                    <h3 className="footer-info-heading">HERE'S 15% OFF!</h3>
                                    <p>Subscribe to our emails (they're super fun, promise) and get <strong>15% off your first online order</strong></p>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <button type="button" className="btn btn-secondary btn-lg btn-block mt-2">SIGN UP</button>
                                    </div>
                                </form>
                            </div> */}

                    </div>

                </div>
            </section>
            <section
                className={`d-flex justify-content-center justify-content-lg-between p-4 ${styles.socialbox}`}
                style={{ background: 'rgba(118,211,229, 1)' }}
            >
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="" className="mx-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="mx-4 text-reset">
                        <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="" className="mx-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="mx-4 text-reset">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </section>

            <div className="text-center p-4" style={{ background: 'rgba(252,221,242,1)' }}>
                © 2021
                <a className="text-reset fw-bold" href=""> Embrioshop</a>
            </div>

        </footer>


    )
}