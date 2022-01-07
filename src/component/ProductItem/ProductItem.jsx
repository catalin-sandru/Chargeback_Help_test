import { Button } from "react-bootstrap";
import ImageContainer from "../ImageContainer";
import { ProductItemStyle } from "./ProductItem.style";

const ProductItem = ({ productData, addToCartHandler }) => {
  return productData.map((item) => (
    <ProductItemStyle key={item.id}>
      <ImageContainer src={item.img} width={90} id={item.id} />

      <div className="info-container">
        <h2>{item.title}</h2>
        <p>{item.info}</p>
        <p className="info-container__price">
          Price: <span className="info-container__price-value text-success ">{item.price}</span>
        </p>
        <Button variant="success" onClick={() => addToCartHandler(item)}>
          Add to cart
        </Button>
      </div>
    </ProductItemStyle>
  ));
};

export default ProductItem;
