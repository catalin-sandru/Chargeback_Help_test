import styled from "styled-components";

export const CheckoutPageStyle = styled.div`
  display: grid;
  width: 80%;
  margin: 1rem auto;
  grid-template-columns: 10% 2fr 15%;
  grid-template-rows: auto;
  grid-template-areas: "img title price";

  .product-title {
    grid-area: title;
    margin: auto 0;
    font-size: 1.4rem;
  }

  .product-price {
    grid-area: price;
    display: flex;
    justify-content: end;
    flex-direction: column;

    .product-price__counter-qty {
      margin: auto 0;
    }
  }

  .product-price__counter {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  .product-price__total {
    p {
      margin: 0.5rem 0;
      text-align: center;
    }
  }
`;
