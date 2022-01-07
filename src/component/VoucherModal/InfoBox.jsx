import { Alert } from "react-bootstrap";

const InfoBox = ({ show, success }) => {
  if (!show) return null;
  return (
    <Alert variant={success ? "success" : "danger"}>
      Voucher is {success ? "valid" : "invalid"}!
    </Alert>
  );
};

export default InfoBox;
