import path from "path";
import fs from 'fs/promises';
import ProductItem from "./product-item";
function Products(props) {
  const {products} = props;
  return (
    <>
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
          />
        );
      })}
    </>
  );
}

export async function getStaticProps(){
    const dataPath = path.join(process.cwd(), 'data' , 'data.json');
    const product = await fs.readFile(dataPath);
    const productList = JSON.parse(product);

    return {
        props :{
            products : productList
        }
    }
}



export default Products;