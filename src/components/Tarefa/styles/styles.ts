import styled from "styled-components";


export const UL = styled.ul`
  z-index: 8;
  margin-bottom: 20px;
  padding: 20px ;
  background-color: rgb(43, 46, 51);
  border-radius: 8px;
  &:hover {
    transform: scale(1.1);
    transition: 2s;
    box-shadow: 2px  2px 2px 2px #7da876ff;;
  }
`
export const Campo = styled.textarea`
  display: block;
  max-width: 700px;
  width: 100%;
  margin-bottom: 15px;
  resize: none;
  border: none;
  background-color: transparent;
  font-size: 13px;
  padding: 5px;
  margin-top: 10px;


`
export const InputName = styled.label`
  font: 20px;
  font-size: 15px;

`
export const list = styled.li`
  list-style: none;

`
export  const Name = styled.h2`
  font-size: 23px;
  color: #cfe4cdff;
`
export const Div = styled.div`
  background-color: rgb(43, 46, 51);
`
