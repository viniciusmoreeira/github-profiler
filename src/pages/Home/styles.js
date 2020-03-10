import styled from "styled-components";
import bg from "../../images/background.png";

export const Container = styled.div`
  max-width: 500px;
  background: url(${bg}) 0% / cover fixed, rgb(11, 10, 13);
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 30vh auto;
  text-align: center;

  h1 {
    color: #fff;
    font-size: 20px;

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

export const Form = styled.form`
  max-width: 350px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit"
}))`
  background: rgb(11, 10, 13);
  border: 0;
  padding: 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
