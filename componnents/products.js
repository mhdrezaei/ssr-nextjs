
import ProductItem from "./product-item";
function Products(props) {
  const {items} = props;
  return (
    <>
      {items.map((product) => {
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