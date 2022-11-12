import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .button-container {
    display: flex;

    justify-content: end;
    button {
      margin-right: 30px;
      margin-top: -3px;
    }
  }
  .create-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    cursor: pointer;
    padding: 5px 10px;
    text-transform: capitalize;
    border-radius: 10px;
    border: 1px solid #3279b5;
    font-size: large;
    padding: 5px;
    margin-top: 10px;
    background-color: #3279b5;
    transition: 0.3s ease-out;
    color: white;
    &:hover {
      box-shadow: 0 0 10px #719ece;
    }
  }
  .logout {
    border: 1px solid red;
    background-color: white;
    color: red;
    &:hover {
      background-color: #ffe0e0;
      box-shadow: 0 0 10px rgba(255, 150, 150);
    }
  }

  .insert-container {
    form div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      input {
        width: 100%;
      }
    }
  }

  input,
  textarea,
  select {
    width: 90%;
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
  textarea {
    resize: vertical;
  }
  label {
    text-transform: capitalize;
  }
`;
