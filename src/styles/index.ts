import { styled, createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin : 0;
    padding:0;
    box-sizing: border-box;
    font-family: roboto, sans-serif;
    list-style: none;
  }

`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  list-style: none;
`
