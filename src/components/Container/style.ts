import styled from 'styled-components'

export const Mcard = styled.form`
  background-color: rgb(43, 46, 51);
  padding: 20px;
  border-radius: 9px;
  display: block;
`
export const Scard = styled.div`
  display: block;
  padding: 10px;
  margin: 0 auto;
  max-width: 600px;
  padding-left: auto;
  padding: 30px;
  border-radius: 10px;
`
export const Input = styled.input`
  margin-bottom: 16px ;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  font-size: 12px;
  display: block;
  width: 100%;
  border: none;
  background-color: rgb(43, 46, 51);
  border: 1px solid #44BD32;

`
export const Titulo = styled.h2`
  margin-bottom: 25px;
  font-size: 25px;
  color: #cfe4cdff;

`
export const Label = styled.label`
  font-weight: bold;
  font-size: 15px;
  display: block;
  margin-bottom: 10px;
`
export const Button = styled.button`
  padding: 9px;
  background-color: green;
  margin-right: 15px;
  margin-top: 10px;
  max-width: 80px;
  width: 100%;
  cursor: pointer;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bolder;
  text-transform: uppercase;
  border: none;


  &:hover {
    background-color: white;
    font-style: italic;
    transition:  1s;
  }
`
export const CButton = styled.button`
  padding: 10px;
  background-color: #a03030ff;
  margin-right: 15px;
  margin-top: 10px;
  max-width: 80px;
  width: 100%;
  cursor: pointer;
  border-radius: 12px;
  font-size: 10px;
  font-weight: bolder;
  text-transform: uppercase;
  border: none;
  text-align: center;


  &:hover {
    background-color: white;
    font-style: italic;
    transition:  1s;
  }
`
