import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html,
  body {  
    display:flex;
    max-width: 100%;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    font-family: proxima-nova, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    text-transform: capitalize;
    color: ${({ theme }) => theme.text};

    :hover {
      color: ${({ theme }) => theme.sameHover};
    }
  }

  p{
    font-size: 1.122rem;
  }

  ::selection {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.select}
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: none;
`

export const Main = styled.main`
  width: 100%;
  display: flex;
  background: none;
  min-height: 100vh;
  flex-direction: column;
`
