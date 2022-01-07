import styled from "styled-components";

const ImageWrapper = styled.div`
  width: ${({ width }) => width + "%"};
  grid-area: img;
  margin: auto;

  img {
    width: 100%;
  }
`;

const ImageContainer = (props) => {
  return (
    <ImageWrapper width={props.width}>
      <img src={props.src} alt={`Product ${props.id}`} />
    </ImageWrapper>
  );
};

export default ImageContainer;
