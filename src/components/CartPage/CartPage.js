import styles from './Cartpage.module.css'
import image2 from './../../assets/nike2.png'
import image3 from './../../assets/nike3.png'

export default function CartPage() {
    return (
        <div className={`${styles.body} border`}>
            <div className={styles.pictureBox}>
                <h1 className={styles.title}>SHOPPING CART</h1>
                <div className={styles.product}>
                    <div className="d-flex align-items-center">
                        <img src={image2} className={styles.img} alt="img" />
                        <div className="ml-5">
                            <h5 className="font-weight-bold">Spodnie Embrioshop</h5>
                            <h6 className="text-secondary">Size: L</h6>
                            <span className={styles.dot} style={{ backgroundColor: 'darkblue' }}></span>
                            <h6 className="text-secondary">$99.99</h6>
                        </div>
                    </div>
                    <button type="button" className="close align-self-center" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <div className={styles.product}>
                    <div className="d-flex align-items-center">
                        <img src={image3} className={styles.img} alt="img" />
                        <div className="ml-5">
                            <h5 className="font-weight-bold">Spodnie Embrioshop</h5>
                            <h6 className="text-secondary">Size: S</h6>
                            <span className={styles.dot} style={{ backgroundColor: 'black' }}></span>
                            <h6 className="text-secondary">$499.99</h6>
                        </div>
                    </div>
                    <button type="button" className="close align-self-center" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.address}>
                <h1 className={`${styles.title} m-4 text-white`}>Address Details</h1>
                <div className={`${styles.field} m-4 pt-2 pb-2 text-white`}>
                    <h6 className="text-secondary">Full name</h6>
                    <h6>Maksymilian Andrzejczak</h6>
                </div>
                <div className={`${styles.field} m-4 pt-2 pb-2 text-white`}>
                    <h6 className="text-secondary">Phone number</h6>
                    <h6>+48 533 643 011</h6>
                </div>
                <div className={`${styles.field} m-4 pt-2 pb-2 text-white`}>
                    <h6 className="text-secondary">Email Address</h6>
                    <h6>andrzejczakmaks@icloud.com</h6>
                </div>
                <div className="d-flex">
                    <div className={`${styles.field} m-4 pt-2 pb-2 text-white w-50`}>
                        <h6 className="text-secondary">Zip Code</h6>
                        <h6>89-632</h6>
                    </div>
                    <div className={`${styles.field} m-4 pt-2 pb-2 text-white w-50`}>
                        <h6 className="text-secondary">Province</h6>
                        <select className={styles.select}>
                            <option>Pomorskie</option>
                            <option>Inne</option>
                        </select>
                    </div>
                </div>
                <div className={`${styles.field} m-4 pt-2 pb-2 text-white`}>
                    <h6 className="text-secondary">Address</h6>
                    <h6>Brzozowa 15</h6>
                </div>
            </div>
            <div className={styles.payment}>
                <h1 className={`${styles.title} m-4 text-white`}>Card Details</h1>
                <div className={`${styles.bankcard} p-3`}>
                    <div>
                        <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt='mastercard' />
                    </div>
                    <h3 className={`text-white text-center my-4`}>4056 3756 7362 1233</h3>
                    <div className="d-flex justify-content-between">
                        <h6 className="text-secondary">Maksymilian Andrzejczak</h6>
                        <h6 className="text-secondary">04/22</h6>
                    </div>
                </div>
                <div className={`${styles.field} m-4 pt-2 pb-2 text-white`}>
                    <h6 className="text-secondary">Name and surname on card</h6>
                    <h6>Maksymilian Andrzejczak</h6>
                </div>
                <div className={`${styles.field} m-4 pt-2 pb-2 text-white`}>
                    <h6 className="text-secondary">Card number</h6>
                    <h6>4056 3756 7362 1233</h6>
                </div>
                <div className="d-flex">
                    <div className={`${styles.field} m-4 pt- pb-2 text-white w-50`}>
                        <h6 className="text-secondary">Expiration date</h6>
                        <div className="d-flex broder border-primary">
                            <select className={styles.select}>
                                <option>mm</option>
                                <option>1</option>
                            </select>
                            <select className={styles.select}>
                                <option>yyyy</option>
                                <option>1222</option>
                            </select>
                        </div>
                    </div>
                    <div className={`${styles.field} m-4 pt-2 pb-2 text-white w-50`}>
                        <h6 className="text-secondary">CVV</h6>
                        <h6>X X X</h6>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center pb-4">
                    <div className="btn btn-primary btn-block mx-4">CHECK OUT</div>
                </div>

            </div>
        </div>
    )
}