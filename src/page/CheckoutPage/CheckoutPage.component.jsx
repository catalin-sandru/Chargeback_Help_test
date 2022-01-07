import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CheckoutForm from "../../component/CheckoutForm";
import Confirm from "../../component/ConfirmModal";
import Header from "../../component/Header";
import ImageContainer from "../../component/ImageContainer";
import VoucherModal from "../../component/VoucherModal";
import { addItemToCartAction, removeItemFromCartAction } from "../../store/cart-action";
import { CheckoutPageStyle } from "./CheckoutPage.style";

const CheckoutPage = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const [voucherModal, setVoucherModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const confirmModalHandler = () => {
    setConfirmModal((prevState) => !prevState);
  };

  const voucherModalHandler = () => {
    setVoucherModal(!voucherModal);
  };

  const increaseQtyHandler = (item) => {
    dispatch(addItemToCartAction(item));
  };

  const decreaseQtyHandler = (...args) => {
    dispatch(removeItemFromCartAction(...args));
  };

  return (
    <div className="cart">
      <Header />
      {cartItems.length < 1 && (
        <Alert variant="warning" className="text-center">
          Cart is empty!
        </Alert>
      )}
      {cartItems.length > 0 &&
        cartItems.map((i) => (
          <CheckoutPageStyle key={i.id}>
            <ImageContainer src={i.img} id={i.id} width={100} />

            <h2 className="product-title">{i.title}</h2>

            <div className="product-price">
              <div className="product-price__counter">
                <Button onClick={() => decreaseQtyHandler({ id: i.id, inCart: i.inCart })}>
                  -
                </Button>
                <p className="product-price__counter-qty">{i.count}</p>
                <Button onClick={() => increaseQtyHandler(i)}>+</Button>
              </div>
              <Button
                variant="danger"
                className="py-0"
                onClick={() => decreaseQtyHandler({ id: i.id, inCart: false })}
              >
                Remove Item
              </Button>

              <div className="product-price__total">
                <p>Total Price: ${i.total}</p>
                {i.voucher && i.newPrice !== 0 && <p>New Price: ${i.newPrice}</p>}
              </div>

              {i.voucher && i.newPrice === 0 && (
                <Button className="py-0" onClick={voucherModalHandler}>
                  Add Voucher
                </Button>
              )}
              <VoucherModal id={i.id} show={voucherModal} toggleModal={voucherModalHandler} />
              <Confirm show={confirmModal} toggleModal={confirmModalHandler} />
            </div>
          </CheckoutPageStyle>
        ))}
      {cartItems.length > 0 && <CheckoutForm confirmModal={confirmModalHandler} />}
    </div>
  );
};

export default CheckoutPage;
