import { Button, CloseButton } from "react-bootstrap";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearStateAction } from "../../store/cart-action";
import { ConfirmModalBody, ConfirmModalBackdrop } from "./ConfirmModal.style";

const ConfirmModal = ({ show, toggleModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const returnHome = () => {
    dispatch(clearStateAction());
    navigate("/");
  };

  if (!show) return null;

  return ReactDom.createPortal(
    <>
      <ConfirmModalBackdrop onClick={toggleModal} />
      <ConfirmModalBody className="modal-body">
        <CloseButton onClick={toggleModal} />
        {cart.cartItems.map((c) => (
          <div key={c.id} className="modal-body__list">
            <p>{c.title}</p>
            <p>Qty: {c.count}</p>
          </div>
        ))}
        <div className="modal-body__info-action">
          <Button onClick={returnHome} variant="success">
            Confirm Order
          </Button>
          <p>Total: ${cart.cartTotal}</p>
        </div>
      </ConfirmModalBody>
    </>,
    document.getElementById("confirm")
  );
};

export default ConfirmModal;
