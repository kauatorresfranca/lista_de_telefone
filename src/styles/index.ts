import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Nome = styled.h2`
  font-size: 18px;
  display: block;
  margin: 40px 0 40px 0;
  font-weight: bold;
`

export default EstiloGlobal
