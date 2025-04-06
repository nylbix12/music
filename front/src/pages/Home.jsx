// Importation de styled-components pour créer des composants stylisés.
import styled from 'styled-components';
// Importation de Link pour la navigation entre les pages de l'application.
import { Link } from 'react-router-dom';
// Importation de l'en-tête de la page d'accueil.
import Header from '../components/Header';

// Conteneur principal de la page, avec un fond gris clair et une hauteur minimale de 100vh.
const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

// Section héroïque (hero section) avec un fond bleu foncé et du texte centré.
const HeroSection = styled.div`
  background-color: #12364B;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

// Titre principal de la page d'accueil.
const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

// Description de la section héroïque, avec un texte de couleur gris clair.
const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: #B0C4D9;
`;

// Bouton d'appel à l'action, qui redirige vers la page de connexion. Il change de couleur lorsqu'on passe la souris dessus.
const CTAButton = styled(Link)`
  background-color: #4361EE;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3A56D4;
  }
`;

// Section générale de contenu, avec un espacement intérieur et une largeur maximale.
const Section = styled.div`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Titre des sections, centré et avec un espacement en bas.
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #12364B;
`;

// Prévisualisation des catégories, en grille responsive (adaptable aux différentes tailles d'écran).
const CategoriesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

// Carte de catégorie, avec un fond blanc, un rayon de bordure et une ombre pour un effet de surélévation.
const CategoryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Image de la catégorie, avec une taille fixe et une image de fond.
const CategoryImage = styled.div`
  height: 150px;
  background-color: #ddd;
  background-image: ${props => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
`;

// Nom de la catégorie, centré et avec un espacement autour.
const CategoryName = styled.h3`
  padding: 1rem;
  text-align: center;
  color: #12364B;
`;

// Bouton pour voir toutes les catégories, centré et en bleu.
const ViewAllButton = styled(Link)`
  display: block;
  text-align: center;
  color: #4361EE;
  font-weight: bold;
  margin: 2rem auto;
  text-decoration: none;
`;

// Un séparateur horizontal avec une couleur gris clair pour diviser les sections.
const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ddd;
  margin: 3rem auto;
  max-width: 1200px;
`;

// Section expliquant comment l'application fonctionne, avec un fond bleu foncé et un texte blanc.
const HowItWorksSection = styled.div`
  background-color: #12364B;
  color: white;
  padding: 3rem 2rem;
  border-radius: 8px;
`;

// Conteneur pour les étapes du fonctionnement de l'application, avec un espacement entre les éléments.
const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

// Étape individuelle, avec une largeur flexible et une taille minimale.
const Step = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 350px;
`;

// Numéro de l'étape, stylisé en cercle avec un fond bleu.
const StepNumber = styled.div`
  background-color: #4361EE;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// Titre de l'étape, avec un espacement sous le titre.
const StepTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

// Description de l'étape, avec une couleur de texte gris clair.
const StepDescription = styled.p`
  color: #B0C4D9;
`;

// Conteneur pour les captures d'écran de l'application.
const AppScreens = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

// Capture d'écran individuelle, avec une taille fixe, un fond sombre et un bord bleu.
const AppScreen = styled.div`
  width: 150px;
  height: 300px;
  background-color: #2D4A62;
  border-radius: 16px;
  border: 2px solid #4361EE;
`;

// Témoignage, avec une mise en forme italique et un espacement supérieur.
const Testimonial = styled.div`
  text-align: center;
  margin-top: 3rem;
  color: #B0C4D9;
  font-style: italic;
`;

// Données temporaires pour les catégories à afficher (exemple de catégories de musiciens).
const featuredCategories = [
  {
    id: 1,
    name: "Chanteuses",
    imgUrl: ""
  },
  {
    id: 2,
    name: "Guitaristes",
    imgUrl: ""
  },
  {
    id: 3,
    name: "Pianistes",
    imgUrl: ""
  },
  {
    id: 4,
    name: "Batteurs",
    imgUrl: ""
  }
];

// Fonction principale qui rend la page d'accueil.
export default function Home() {
  return (
    <>
      <PageContainer>
        {/* Section héroïque avec le titre principal et la description */}
        <HeroSection>
          <MainTitle>Trouve Ton Partenaire Musical Avec Nous</MainTitle>
          <HeroDescription>
            La première plateforme qui connecte les musiciens pour des collaborations inoubliables. 
            Trouvez, échangez et créez en toute simplicité.
          </HeroDescription>
          <CTAButton to="/login">Commencer</CTAButton>
        </HeroSection>

        {/* Section des catégories à découvrir */}
        <Section>
          <SectionTitle>Discover top music</SectionTitle>
          <CategoriesPreview>
            {featuredCategories.map(category => (
              <CategoryCard key={category.id}>
                <CategoryImage imgUrl={category.imgUrl} />
                <CategoryName>{category.name}</CategoryName>
              </CategoryCard>
            ))}
          </CategoriesPreview>
          <ViewAllButton to="/categories">Voir toutes les catégories →</ViewAllButton>
        </Section>

        <Divider />

        {/* Section expliquant comment l'application fonctionne */}
        <Section>
          <HowItWorksSection>
            <SectionTitle style={{ color: 'white' }}>How BestMusi Works</SectionTitle>
            <StepsContainer>
              <div>
                <Step>
                  <StepNumber>1</StepNumber>
                  <StepTitle>Créez votre profil</StepTitle>
                  <StepDescription>En seulement deux minutes</StepDescription>
                </Step>
                <Step>
                  <StepNumber>2</StepNumber>
                  <StepTitle>Trouvez des musiciens</StepTitle>
                  <StepDescription>Près de chez vous ou en ligne</StepDescription>
                </Step>
                <Step>
                  <StepNumber>3</StepNumber>
                  <StepTitle>Collaborez en direct</StepTitle>
                  <StepDescription>Avec notre messagerie intégrée</StepDescription>
                </Step>
              </div>
              
              <AppScreens>
                <AppScreen />
                <AppScreen />
              </AppScreens>
            </StepsContainer>

            <Testimonial>
              Plus de 100 000 musiciens utilisent notre app, et ils nous font toujours confiance
            </Testimonial>
          </HowItWorksSection>
        </Section>
      </PageContainer>
    </>
  );
}
