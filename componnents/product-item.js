import Link from "next/link";
import styles from "./product-item.module.css"

function ProductItem(props){
    return(
        
        <Link href={`/${props.id}`} >
        <a className={styles.card} >
        <h2>{props.title} &rarr;</h2>
        <p>{props.description}</p>
        </a>
      </Link>
     
    );
}



export default ProductItem;