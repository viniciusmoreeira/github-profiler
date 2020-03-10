import styled from "styled-components";
import bg from "../../images/background.png";

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Section = styled.div`
  background: url(${bg}) 0% / cover fixed, #000;
  text-align: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    width: 150px;
    border-radius: 50%;
    margin-top: 20px;
    border: 3px solid #fff;
  }

  h1 {
    font-size: 36px;
    margin-top: 15px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #999;
    line-height: 1.4;
    max-width: 400px;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
      color: #eee;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      margin: 15px;

      svg {
        margin-right: 5px;
      }
    }
  }

  @media (max-width: 768px) {
    img {
      width: 120px;
    }

    h1 {
      font-size: 20px;
    }

    ul {
      flex-direction: column;
      list-style: none;
      align-items: center;
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg}) 0% / cover fixed, rgb(11, 10, 13);
  margin: 40px 10px;
  height: 75px;
  width: 130px;
  border-radius: 4px;
  font-size: 18px;

  @media (max-width: 768px) {
    max-width: 100px;
  }

  span {
    font-size: 12px;
    margin-top: 5px;
    color: #999;
    text-transform: uppercase;
  }
`;

export const RepoList = styled.div`
  background-color: #fff;
  min-height: 500px;
  color: #000;
  padding: 30px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style: none;

  li {
    height: 100%;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin: 10px;
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    display: flex;
    justify-content: center;

    &:hover,
    &:focus {
      box-shadow: 0 8px 20px -15px rgba(0, 0, 0, 0.2);
    }

    a {
      text-decoration: none;
      color: #000;
      font-size: 16px;

      p {
        color: #333;
        font-size: 14px;
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
    }

    span {
      margin: 10px;
      font-size: 14px;

      svg {
        margin-right: 5px;
      }
    }

    .langColor {
      padding: 5px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 5rem;
  background-color: #fff;
  color: #000;
  text-align: center;
  font-weight: 500;
  font-size: 14px;

  a {
    color: #61dafb;
    padding: 5px;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
