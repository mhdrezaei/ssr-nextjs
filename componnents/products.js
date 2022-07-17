import ProductItem from "./product-item";
import products from "../data/data";
function Products() {
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

export default Products;