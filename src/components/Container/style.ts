import styled from 'styled-components'

export const Mcard = styled.div`
  border: 2px solid black;
  padding: 20px;
  border-radius: 9px;
  display: block;
`
export const Scard = styled.div`
  display: block;
  border: 2px solid blue;
  padding: 10px;
  margin: 0 auto;
  max-width: 600px;
  padding-left: auto;
  padding: 30px;
  border-radius: 10px;
`
export const Input = styled.input`
  margin: 6px 0 8px 0;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  font-size: 12px;
  display: block;
  width: 100%;
`
export const Titulo = styled.h2`
  margin-bottom: 10px;
  font-size: 25px;
`
export const Label = styled.label`
  font-weight: bold;
  font-size: 15px;
  display: block;
`
export const Button = styled.button`
  padding: 9px;
  background-color: green;
  margin-right: 15px;
  margin-top: 10px;
  max-width: 70px;
  width: 100%;
  cursor: pointer;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bolder;

  &:hover {
    background-color: blue;
  }
`
