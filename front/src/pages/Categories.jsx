import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { motion } from 'framer-motion'
// Conteneur principal de la page, avec un fond sombre et un padding.
const PageContainer = styled.div`
  background-color: #12364B;
  min-height: 100vh;
  padding: 2rem;
`;
// Section héro qui contient le titre principal et le sous-titre.
const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;
// Titre principal de la page.
const MainTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
// Sous-titre de la page avec une couleur de texte claire et un maximum de largeur.
const Subtitle = styled.p`
  color: #B0C4D9;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;
// Grille de catégories, avec une disposition automatique des éléments.
const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;
// Carte représentant chaque catégorie. Elle inclut des animations au survol.
const CategoryCard = styled(motion(Link))`
  position: relative;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);

    &::after {
      opacity: 1;
    }

    .category-title {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
// Image de fond de chaque carte, avec une taille et un positionnement ajustés.
const CategoryImage = styled.div`
  height: 100%;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
`;
// Titre de la catégorie, qui s'affiche au bas de chaque carte.
const CategoryTitle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s;
`;
// Section inférieure contenant le lien vers plus de catégories et la barre de recherche.
const BottomSection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;
// Lien "Plus de catégories", avec un effet de soulignement au survol.
const MoreLink = styled(Link)`
  color: #4361EE;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
// Barre de recherche, avec un style responsive et un padding adapté.
const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 25px;
  border: none;
  font-size: 1rem;
  margin: 0 auto;
  display: block;
`;

// Tableau des catégories avec leurs informations (ID, nom, image et chemin).
const categories = [
  {
    id: 1,
    name: "Female Singers",
    imgUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    path: "/profiles/female-singers"
  },
  {
    id: 2,
    name: "Producers",
    imgUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    path: "/profiles/producers"
  },
  {
    id: 3,
    name: "Guitarists",
    imgUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    path: "/profiles/guitarists"
  },
  {
    id: 4,
    name: "Pianists",
    imgUrl: "https://images.unsplash.com/photo-1571974599782-87624638275e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    path: "/profiles/pianists"
  },
  {
    id: 5,
    name: "Drummers",
    imgUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    path: "/profiles/drummers"
  },
  {
    id: 6,
    name: "DJs",
    imgUrl: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    path: "/profiles/djs"
  },
  {
    id: 7,
    name: "Violinists",
    imgUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    path: "/profiles/violinists"
  },
  {
    id: 8,
    name: "Bassists",
    imgUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    path: "/profiles/bassists"
  }
];
// Composant principal de la page des catégories
export default function Categories() {
  return (
    <>{/* Section héro */}
      <PageContainer>
        <HeroSection>
          <MainTitle>Discover Top Music Production Pros</MainTitle>
          <Subtitle>Find and connect with the best music professionals for your next project</Subtitle>
        </HeroSection>
{/* Grille des catégories */}
        <CategoriesGrid>
          {categories.map(category => (
            <CategoryCard key={category.id} to={category.path}>
              <CategoryImage imgUrl={category.imgUrl} />
              <CategoryTitle className="category-title">
                {category.name}
              </CategoryTitle>
            </CategoryCard>
          ))}
        </CategoriesGrid>
{/* Section inférieure avec lien "Plus de catégories" et barre de recherche */}
        <BottomSection>
          <MoreLink to="/all-categories">More categories</MoreLink>
          <SearchBar 
            type="text" 
            placeholder="Search for specific categories..." 
          />
        </BottomSection>
      </PageContainer>
    </>
  );
}