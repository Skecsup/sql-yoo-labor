import styled from "styled-components";

export const Exercise_style = styled.div`
  h2 {
    margin-top: 30px;
  }
  .bold {
    font-weight: bold;
  }
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
    min-height: 100%;
    max-height: 300px;
    border-radius: 10px;
    background-color: #dae5d9;
    overflow-y: auto;
    overflow-x: auto;
    padding: 10px;
  }
  textarea {
    max-width: 40vw;
    width: 80%;
    height: 100px;
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
      width: 100%;
    }
    .left-side {
      width: 100%;
    }
    .result {
      min-height: 200px;
      width: 80%;
    }
    textarea {
      max-width: 80vw;
    }
  }
`;
