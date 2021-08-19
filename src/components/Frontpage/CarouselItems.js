/* eslint-disable jsx-a11y/anchor-is-valid */
import image1 from './../../assets/nike1.png'
import image2 from './../../assets/nike2.png'
import image3 from './../../assets/nike3.png'
import image4 from './../../assets/nike6.png'
import styles from './Front.module.css'

export default function CarouselItems() {
    return (
        <div className="bg-white border text-center mt-3" style={{width: '90%', margin: 'auto'}}>
                    <h2 className="mt-3">New Arrivals</h2>
                    <h6 className="text-secondary">Check out the latest custom embroidered items </h6>
                    <div className="d-flex justify-content-center mt-5 flex-wrap">
                        <div className={`card mx-5 ${styles.cartborder}`} style={{ width: '18rem' }}>
                            <img className="card-img-top" src={image3} alt="Card im" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">4.99$</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className={`card mx-5 ${styles.cartborder}`} style={{ width: '18rem' }}>
                            <img className="card-img-top" src={image2} alt="Card im" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">14.99$</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className={`card mx-5 ${styles.cartborder}`} style={{ width: '18rem' }}>
                            <img className="card-img-top" src={image1} alt="Card im" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">14.99$</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className={`card mx-5 ${styles.cartborder}`} style={{ width: '18rem' }}>
                            <img className="card-img-top" src={image1} alt="Card im" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">54.99$</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.gifbox} d-flex justify-content-around my-5 p-1 mx-4`}>
                        <div className="font-weight-bold">
                            Only on embrioshop.pl
                        </div>
                        <div className="d-flex align-items-center text-center flex-wrap">
                            <img className="gif_img m-auto" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/truck73-37.gif" alt="FREE SHIPPING" height="37" width="73" />
                            <div className="ml-2">
                                <p className="m-0"><strong>FREE SHIPPING</strong></p>
                                <p className="m-0">(on orders over $420)</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center text-center flex-wrap">
                            <img className="gif_img m-auto" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/gifts-gif-ani-73x37.gif" alt="SURPRISES" height="37" width="73" />
                            <div className="ml-2">
                                <p className="m-0"><strong>SURPRISES</strong></p>
                                <p className="m-0">(on orders over $420)</p>
                            </div>
                        </div>
                    </div>

                </div>
            )
}