import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#3a56d4',
    light: '#f8f9fa',
    dark: '#212529'
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.light};
  }

`;



 export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
`;