import styled from 'styled-components';

const Styles = styled.div`
  .projects-container {
  padding: 10px;
  height: 160px;
  width: 100px;
  margin: 15px;
    .projects-image {
      height: 100px;
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .projects-title {
      font-size: 1.3rem;
      text-align: center;
    }
    .projects-link {
      text-align: center;
      a {
        text-decoration: none;
        font-size: 1.1rem;
        color: #000;
      }
    }
  }
`;

export default Styles;
