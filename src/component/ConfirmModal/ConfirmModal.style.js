import styled from "styled-components";

export const ConfirmModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ConfirmModalBody = styled.div`
  border-radius: 0.3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 80%;

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .modal-body__list,
  .modal-body__info-action {
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-between;
  }
`;
