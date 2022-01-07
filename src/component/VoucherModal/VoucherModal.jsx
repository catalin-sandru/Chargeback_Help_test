import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { setProductDiscountAction } from "../../store/cart-action";
import InfoBox from "./InfoBox";

const VoucherModal = ({ id, show, toggleModal }) => {
  const dispatch = useDispatch();

  const [validVoucher, setValidVoucher] = useState(false);
  const [infoBox, setInfoBox] = useState(false);

  const inputValue = useRef();

  const applyVoucherHandler = (itemId) => {
    const discount = +inputValue.current.value.split("_")[1];

    if (!discount || typeof discount !== "number") {
      setValidVoucher(false);
      setInfoBox(true);
      return;
    }

    if (discount > 50) {
      return alert("Discount can not be greater than 50%");
    }

    if (typeof discount === "number") {
      setValidVoucher(true);
      setInfoBox(true);
      dispatch(setProductDiscountAction({ itemId, discount }));
      setTimeout(() => {
        setInfoBox(false);
        setValidVoucher(false);
        toggleModal();
      }, 500);
    }
  };

  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add discount code</Modal.Title>
      </Modal.Header>
      {infoBox && <InfoBox show={infoBox} success={validVoucher} />}
      <Modal.Body className="product-voucher d-flex">
        <input
          className="form-control me-auto"
          type="text"
          placeholder="discount_25"
          ref={inputValue}
          minLength={3}
        />
        <Button className="ms-2" onClick={() => applyVoucherHandler(id)}>
          Apply
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default VoucherModal;
