import styled from "styled-components";

export const Navbar_style = styled.div`
  .nav-container {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .nav-container-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .content {
    padding: 10px;
    border-left: 2px solid #afdaf9;
  }
  .top-row {
    display: flex;
    background-color: #fafafa;
    width: 100%;
    height: 10vh;
    border-bottom: 2px solid #afdaf9;
    justify-content: end;
    align-items: center;

    button {
      height: 50%;
      margin-right: 20px;
    }
  }

  .left-column {
    background-color: #fafafa;
    height: 100vh;
    width: fit-content;
    h1 {
      font-size: 30px;
      margin: 10px;
      margin-top: 25px;
    }
  }
`;
