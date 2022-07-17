import Link from "next/link";
import styles from "./product-item.module.css"

function ProductItem(props){
    return(
        <>
        <Link href={`/${props.id}`} >
        <span className={styles.card} >
        <h2>{props.title} &rarr;</h2>
        <p>{props.description}</p>
        </span>
      </Link>
      </>
    );
}



export default ProductItem;