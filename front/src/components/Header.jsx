import styled from 'styled-components';
import { Link } from 'react-router-dom';
/**
 * Conteneur principal du header, qui contient la barre de navigation et le logo.
 * Utilise un fond bleu, un padding et une ombre légère pour un effet de profondeur.
 */
const HeaderContainer = styled.header`
  background-color: #4361ee;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
/**
 * Composant du logo affiché dans l'en-tête.
 * Le texte est de couleur blanche, de taille 1.5rem et en gras.
 */
const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  
`;

/**
 * Composant de la barre de navigation contenant les liens principaux.
 * Les éléments sont disposés horizontalement avec un espace entre chaque lien.
 */
const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

/**
 * Composant de lien de navigation avec style spécifique.
 * Les liens sont blancs, sans soulignement, et changent de couleur au survol.
 */
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
/**
 * Composant de lien pour l'authentification, avec un arrière-plan légèrement transparent.
 * Il a un style similaire aux autres liens mais avec une couleur de fond différente.
 */
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
/**
 * Composant Header principal qui affiche le logo et les liens de navigation.
 * Le header est divisé en trois parties : une à gauche pour la navigation,
 * une au centre pour le logo et une à droite pour le lien d'authentification.
 */
export default function Header() {
  return (
    <HeaderContainer>
      {/* Barre de navigation à gauche */}
      <Nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/categories">Catégories</NavLink>
      </Nav>
       {/* Logo au centre */}
      <Logo>BestMusi</Logo> 
        {/* Lien d'authentification à droite */}
      <Nav>
        <AuthLink to="/login">S'identifier</AuthLink>
      </Nav>
    </HeaderContainer>
  );
}