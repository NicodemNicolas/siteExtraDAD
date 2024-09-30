import style from "./header.module.css"
import cart from "../../assets/Cart.png"
import wishlist from '../../assets/Wishlist.png'


function Header() {
    return (
        <header className={style.cabecalho}>
            <h1 className={style.title}>Exclusive</h1>
            <nav className={style.links}>
                <p className={style.element}>Home</p>
                <p className={style.element}>Contact</p>
                <p className={style.element}>About</p>
                <p className={style.element}>Sign Up</p>
            </nav>
            <div className={style.searchCartWish}>
                <div className={style.inputWrapper}>
                    <input type="text" className={style.input} placeholder="What are you looking for?" itemScope />
                </div>
                <img className={style.cart} src={cart} alt="" />
                <img className={style.wishlist} src={wishlist} alt="" />
            </div>
        </header>
    )
}

export default Header;