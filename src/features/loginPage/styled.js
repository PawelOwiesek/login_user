import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #d54b4b, #172470, #1edc14);
  width: 800px;
  height: 600px;
  border-radius: 20px;
  box-shadow: 30px -18px 100px 49px #2b5e47;
`;

export const Title = styled.h1`
  color: #f5f5f5;
  font-size: 42px;
`;
export const SubHeader = styled.h2`
  color: #f5f5f5;
  font-size: 36px;
`;
export const InputLabel = styled.label`
  font-size: 30px;
  color: #fff;
  display: inline-block;
  margin: 20px;
`;
export const Input = styled.input`
  display: flex;
  font-size: 25px;
  margin-left: 40px;
  padding: 10px 25px;
  width: 400px;
  border-radius: 25px;
`;

export const Button = styled.button`
  display: block;
  font-size: 24px;
  background-color: #4c189b;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 10px auto;
`;
