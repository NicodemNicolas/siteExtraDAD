import Sector from "../../components/sector/Sector";
import img1 from "../../assets/Services.png"
import img2 from "../../assets/Services1.png"
import img3 from "../../assets/Services2.png"
import styles from "./Sectors.module.css"


function Sectors(){
    return(
        <div className={styles.content}>
            <Sector img={img1} title="FREE AND FAST DELIVERY" subtitle="Free delivery for all orders over $140"></Sector>
            <Sector img={img2} title="24/7 CUSTOMER SERVICE" subtitle="Friendly 24/7 customer support"></Sector>
            <Sector img={img3} title="MONEY BACK GUARANTEE" subtitle="We reurn money within 30 days"></Sector>
        </div>
    )
}
export default Sectors;