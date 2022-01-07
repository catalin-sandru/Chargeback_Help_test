import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .page-btn {
    height: 3rem;
    width: 3rem;
    margin: 1rem;
    border-radius: 50%;
    font-size: 1.2rem;
    background-color: #8d8741;
    cursor: pointer;
    color: #fff;
    border: 0;
  }

  .page-btn:disabled {
    background-color: #daad86;
    cursor: not-allowed;
  }

  .current-page__container {
    height: 3rem;
    width: 3rem;
    margin: 1rem;
    border-radius: 50%;
    background-color: #659dbd;
    display: flex;

    .current-page {
      margin: auto;
      font-size: 1.2rem;
      color: #fff;
      font-weight: bold;
    }
  }
`;
