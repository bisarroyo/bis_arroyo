import styled from "styled-components";

const Styles = styled.div`
  width: 280px;
  h2 {
    font-size: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input, textarea {
      width: 250px;
      margin: 10px auto;
      border: 1px solid #000;
      border-radius: 20px;
      outline: none;
      padding: 10px;
      font-size: 1rem;
    }
    textarea {
      height: 100px;
    }
    input::placeholder, textarea::placeholder {
      text-align: center;
      font-size: 1rem;
    }
    button {
      width: 70px;
      height: 25px;
      border: 1px solid #000;
      border-radius: 20px;
    }
  }
  @media (min-width: 600px) {

  }
`;

export default Styles;
