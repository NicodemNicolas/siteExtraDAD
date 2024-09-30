import styles from "./Sector.module.css"

function Sector({img, title, subtitle}){
    return(
        <div className={styles.content}>
            <img src={img} className={styles.img} alt=""/>
            <h2 className={styles.title}>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}
export default Sector;