import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #d54b4b, #172470, #1edc14);
  width: 800px;
  max-height: 630px;
  border-radius: 20px;
  box-shadow: 30px -18px 100px 49px #2b5e47;

  @media (max-width: 767px) {
    font-size: 25px;
    width: 80vw;
    height: 90vh;
  }

  @media (max-width: 450px) {
    font-size: 25px;
    width: 90vw;
  }
`;

export const Title = styled.h1`
  color: #f5f5f5;
  font-size: 42px;
  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

export const SubHeader = styled.h2`
  color: #f5f5f5;
  font-size: 36px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

export const InputLabel = styled.label`
  font-size: 30px;
  color: #fff;
  display: inline-block;
  margin: 20px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  display: flex;
  font-size: 25px;
  margin-left: 40px;
  padding: 10px 25px;
  max-width: 400px;
  border-radius: 25px;
  @media (max-width: 767px) {
    font-size: 20px;
    width: 150px;
    height: 20px;
    margin-left: 0;
  }
`;

export const Button = styled.button`
  display: block;
  font-size: 24px;
  background-color: #4c189b;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 10px auto;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #fff;
`;

export const RegLink = styled.a`
  text-decoration-line: none;
  color: #ea3232;
  margin-left: 20px;
`;
