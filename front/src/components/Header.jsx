import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #4361ee;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  
  /* Style pour le logo à droite */
  margin-right: auto; /* Pousse le logo à droite */
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const AuthLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/categories">Catégories</NavLink>
      </Nav>
      
      <Logo>BestMusi</Logo> {/* Remplacez par votre composant Logo */}
      
      <Nav>
        <AuthLink to="/login">S'identifier</AuthLink>
      </Nav>
    </HeaderContainer>
  );
}