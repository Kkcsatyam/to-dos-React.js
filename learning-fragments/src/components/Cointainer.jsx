import styles from "./Cointainer.module.css";

const Cointainer=(props)=>{
    return(
        <div className={styles.cointainer}>{props.children}</div>
    )
}

export default Cointainer;