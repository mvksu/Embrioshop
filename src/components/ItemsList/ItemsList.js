/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useRouteMatch } from "react-router-dom"
import styles from './ItemsList.module.css'
import image1 from './../../assets/nike1.png'
import image2 from './../../assets/nike2.png'
import image3 from './../../assets/nike3.png'
import image4 from './../../assets/nike4.png'
import image5 from './../../assets/nike5.png'
import { useEffect } from "react"


export default function ItemsList() {
    let match = useRouteMatch();
    const items = [
        { id: 1, name: 'Bluza 1', img: image1, color: 'red', size: 'XL' },
        { id: 2, name: 'Czapka', img: image2, color: 'red', size: 'XL' },
        { id: 3, name: 'Bluza 2', img: image3, color: 'red', size: 'L' },
        { id: 4, name: 'Tee 1', img: image4, color: 'red', size: 'S' },
        { id: 5, name: 'Tee 2', img: image5, color: 'red', size: 'S' },
        { id: 6, name: 'Spodnie', img: image4, color: 'red', size: 'M' },
    ]
    useEffect(() => {
        console.log(match)
    }, [])


    return (
        <div className={`${styles.body} border`}>
            <div className={`${styles.sidebar}`}>
                <div className="cart">
                    <h3 className={styles.title}>CART</h3>
                    <div className={styles.cartIcon1}>
                    </div>
                    <div className={styles.cartIcon2}>
                    </div>
                    <span className={styles.empty}>No items in cart.</span>
                </div>

                <div className={styles.categories}>
                    <h3 className={styles.title}>CATEGORIES</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            New Arivals
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Accesories
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Bags
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Dressed
                        </label>
                    </div><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Jackets
                        </label>
                    </div><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Jewelry
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Shoes
                        </label>
                    </div><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Shirts
                        </label>
                    </div><div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Sweaters
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            T-shirts
                        </label>
                    </div>
                </div>
                <div className="colors">
                    <h3 className={styles.title}>COLORS</h3>
                    <div className="d-flex justify-content-between">
                        <ul className={styles.checklist}>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "beige" }}></span>Beige</li>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#222" }}></span>Black</li>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#6e8cd5" }}></span>Blue</li>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#f56060" }}></span>Brown</li>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#44c28d" }}></span>Green</li>
                        </ul>

                        <ul className={styles.checklist}>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#999" }}></span>Grey</li>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#f79858" }}></span>Orange</li>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#b27ef8" }}></span>Purple</li>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#f56060" }}></span>Red</li>
                            <li className="d-flex align-items-center"><span className={styles.dot} style={{ background: "#fff" }}></span>White</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.title}>SIZE</h3>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">S</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">M</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">L </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">XL </label>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.productsList}>
                <h2 className={styles.title}>Wszystkie: ({items.length})</h2>
                <div className="d-flex w-100">
                    <div className="d-flex flex-wrap justify-content-center">
                        {items.map(item => (
                            <Link to={`/products/${item.id}`} key={item.id} className={styles.productBox}>
                                <img src={item.img} alt={item.name} width='100%' height='350px' className="img-fluid"/>
                                <h5 className={`${styles.title} ml-2 pt-3`}>Embrioshop</h5>
                                <h5 className={`${styles.subtitle} ml-2 pt-1`}>Haftowana Bluza essa</h5>
                                <h5 className={`${styles.subtitle} ml-2 pt-1`}>499.99$</h5>
                                <div className="d-flex justify-content-center">
                                    <button className={`btn btn-outline-warning mb-3`}>ADD TO CART</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>








        </div >
    )
}