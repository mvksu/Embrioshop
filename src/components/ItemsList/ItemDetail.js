import styles from './ItemsList.module.css'
import image1 from './../../assets/nike1.png'
import image2 from './../../assets/nike2.png'
import image3 from './../../assets/nike3.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ItemDetail(params) {
    const [detail, setDetail] = useState(true)

    return (
        <div className={`d-flex align-items-center flex-wrap`}>
            <div className="w-50">
                <img src={image1} alt="pic" className="img-fluid" />
                <img src={image2} alt="pic" className="img-fluid" />
                <img src={image3} alt="pic" className="img-fluid" />
            </div>
            <div className={styles.sticky} >
                <div className="p-5">
                    <h5 className={`${styles.title} pt-3`}>Embrioshop</h5>
                    <h5 className={`${styles.titleBig} pt-1`}>Haftowana Bluza essa</h5>
                    <h5 className={`${styles.subtitle} pt-1`}>499.99$</h5>
                    <div className="d-flex justify-content-between">
                        <select className={`${styles.select} mr-5`}>
                            <option>Grey</option>
                            <option>1</option>
                        </select>
                        <select className={styles.select}>
                            <option>XS</option>
                            <option>1222</option>
                        </select>
                    </div>
                    <Link to="/cart" className="btn btn-dark btn-block">CHECK OUT</Link>
                    <div className="w-75">
                        <h2 className={styles.title}>The FG7C hoodie is handcrafted with a sun fade wash process and antique brass hardware to create a unique vintage piece that will vary in appearance. The FG7C logo on the back is stenciled in textured velvet flocking, inspired by vintage American military sweats. Ribbed knit cuffs and waistband frame the piece.</h2>
                    </div>
                    <div className="pt-3">
                        {detail ?
                            <h5 className={styles.details} onClick={() => setDetail(!detail)}>DETAILS +</h5>
                            :
                            <div>
                                <h5 className={styles.details} onClick={() => setDetail(!detail)}>DETAILS -</h5>
                                <ul className={styles.details}>
                                    <li>MADE IN USA</li>
                                    <li>USA COTTON FLEECE 23OZ</li>
                                    <li>KANGAROO POCKET</li>
                                    <li>RIBBED KNIT CUFFS AND WAIST HEM</li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}