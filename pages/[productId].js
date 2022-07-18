import fs from "fs/promises";
import path from "path";
import styles from "../styles/Home.module.css";
function ProdutDetails(props) {
    const {product} = props
    console.log(props)
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

export async function getStaticProps(context) {
  const { params } = context;
  const pId = params.productId;
  const filePath = path.join(process.cwd(), "data", "data.json");
  const file = await fs.readFile(filePath);
  const dataJson = JSON.parse(file);
  const theProduct = dataJson.products.find((product) => product.id === pId);

  return {
    props: {
      product: theProduct,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "p1" } },
      { params: { productId: "p2" } },
      { params: { productId: "p3" } },
      { params: { productId: "p4" } },
    ],
    fallback : false
  };
}

export default ProdutDetails;
