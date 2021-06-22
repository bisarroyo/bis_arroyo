import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  img {
    height: 200px;
    border-radius: 50%;
    margin: 25px;
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    img {
      height: 300px;
    }
  }
`;

export default Styles;
