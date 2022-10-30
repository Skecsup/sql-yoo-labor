import styled from "styled-components";

export const Styled_Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  form {
    box-shadow: 0 0 10px #719ece;
    background-color: #eee;
    padding: 60px 20px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-size: larger;
    }
    button {
      width: 80%;
      border-radius: 10px;
      border: 1px solid #3279b5;
      font-size: large;
      padding: 5px;
      margin-top: 10px;
      background-color: #3279b5;
      transition: 0.3s ease-out;
      color: white;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 10px #719ece;
      }
    }
    input {
      text-align: center;
      border: none;
      border-radius: 10px;
      padding: 5px;
      background-color: #afdaf9;
      margin: 10px;
      outline: 1px solid #3279b5;
      transition: 0.3s ease-in-out;
      &:focus {
        box-shadow: 0 0 10px #719ece;
      }
    }
  }
`;
