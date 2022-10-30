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
    height: 100%;
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

    .tables {
      margin-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      div {
        padding: 5px;
        text-transform: uppercase;
        font-weight: 500;
        transition: color 0.3s ease-in-out;
        &:hover {
          color: #afdaf9;
        }
      }
    }

    h1 {
      font-size: 30px;
      margin: 10px;
      margin-top: 25px;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: #afdaf9;
      }
    }
  }
`;

export const Styled_Navbar_Button = styled.button`
  border: none;
  background-color: #afdaf9;
  border-radius: 10px;
  text-transform: uppercase;
  padding: 10px;
  color: #000;
  font-weight: 100;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #3279b5;
  }
`;
