import fs from "fs/promises";
import path from "path";
import styles from "../styles/Home.module.css";
function ProdutDetails(props) {
    const {product} = props
    if(!product){
        return <h2 center>Loading...</h2>
    }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.card}>
        <h2>{product.title} &rarr;</h2>
        <p>{product.description}</p>
      </span>
    </main>
  );
}


async function getData(){
    const filePath = path.join(process.cwd(), "data", "data.json");
    const file = await fs.readFile(filePath);
    const dataJson = JSON.parse(file);
    return dataJson;
}

export async function getStaticProps(context) {
  const { params } = context;
  const pId = params.productId;
  const data = await getData();
  console.log(data)
  const theProduct = data.products.find((product) => product.id === pId);

  return {
    props: {
      product: theProduct,
    },
  };
}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map((product) => product.id);
    const paramswithId = ids.map((id) => ({params : {productId :id}}));
    console.log(paramswithId)
  return {
    paths: paramswithId,
    fallback : true
  };
}

export default ProdutDetails;
