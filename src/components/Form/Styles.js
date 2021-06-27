import styled from 'styled-components';

const Styles = styled.div`
  width: 100%;
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
      border: 1px solid #A98ED5;
      border-radius: 20px;
      outline: none;
      padding: 10px;
      font-size: 1rem;
      font-family: 'Ubuntu', sans-serif;
    }
    textarea {
      height: 100px;
    }
    input::placeholder, textarea::placeholder {
      font-family: 'Ubuntu', sans-serif;
      color: #745B9E;
      text-align: center;
      font-size: 1.1rem;
    }
    button {
      width: 90px;
      height: 30px;
      border: 1px solid #A98ED5;
      border-radius: 20px;
      font-size: 1.1rem;
      color: #745B9E;
      background-color: transparent;
      transition: 0.5s;
    }
    button:hover {
      background-color: #A98ED544;
    }
  }
  @media (min-width: 600px) {

  }
`;

export default Styles;
