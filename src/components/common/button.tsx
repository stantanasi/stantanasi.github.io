import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 99%);
  color: rgb(248, 248, 248);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  width: auto;
  height: auto;
  font-size: 12px;
  margin: 0px;
  padding: 12px;
  border-radius: 5px;

  :hover {
    color: rgb(248, 248, 248);
    background: linear-gradient(99deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 130%);
    transform: scale(1.05);
    transition: all 0.2s ease 0s;
  }
`
