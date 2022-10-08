import styled from "styled-components";

export const Exercise_style = styled.div`
  .color {
    background-color: #dae5d9;
  }

  .left-side {
    width: 50%;
    padding: 10px;
    p {
      text-align: justify;
    }
  }
  .result {
    width: 50%;
    max-width: 50vw;
    min-height: 100%;
    max-height: 300px;
    border-radius: 10px;
    background-color: #dae5d9;
    overflow-y: auto;
    overflow-x: auto;
    padding: 10px;

    textarea {
      width: 80%;
      height: 100%;
      background-color: #dae5d9;
      border: none;
      box-shadow: none;
      margin-bottom: 0;
      border-radius: 10px;
      max-width: 100%;
      max-height: 100%;
      border: 1px solid black;
      box-shadow: 5px 5px 10px #555;
    }
  }
  textarea {
    box-shadow: 5px 5px 10px #555;
    margin-bottom: 10px;
  }
  .exercise {
    display: flex;
    flex-direction: row;
  }

  .submit-button {
    background: linear-gradient(
      0deg,
      rgba(38, 91, 137, 1) 0%,
      rgba(50, 121, 181, 1) 100%
    );
    border: 1px solid black;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
    border-radius: 10px;
    margin-right: 30px;
  }

  .default {
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 15px;
    padding: 5px;
  }

  .buttons {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 1200px) {
    .exercise {
      flex-direction: column;
    }
    .result {
      min-height: 200px;
    }
  }
`;
