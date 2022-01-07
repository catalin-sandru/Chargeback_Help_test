import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

import Header from "../../component/Header";
import Pagination from "../../component/Pagination";
import { addItemToCartAction } from "../../store/cart-action";
import ProductItem from "../../component/ProductItem/ProductItem";

const HomePage = () => {
  const page = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addItemToCartAction(item));
  };

  return (
    <div>
      <Header />
      {page.pageItems.length < 1 && <Spinner animation="border" variant="warning" />}
      {page.pageItems.length > 0 && (
        <ProductItem addToCartHandler={addToCartHandler} productData={page.pageItems} />
      )}
      <Pagination />
    </div>
  );
};

export default HomePage;
