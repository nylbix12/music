import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

// Styles
const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const HeroSection = styled.div`
  background-color: #12364B;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: #B0C4D9;
`;

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

const Section = styled.div`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #12364B;
`;

const CategoriesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

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

const CategoryImage = styled.div`
  height: 150px;
  background-color: #ddd;
  background-image: ${props => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
`;

const CategoryName = styled.h3`
  padding: 1rem;
  text-align: center;
  color: #12364B;
`;

const ViewAllButton = styled(Link)`
  display: block;
  text-align: center;
  color: #4361EE;
  font-weight: bold;
  margin: 2rem auto;
  text-decoration: none;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ddd;
  margin: 3rem auto;
  max-width: 1200px;
`;

const HowItWorksSection = styled.div`
  background-color: #12364B;
  color: white;
  padding: 3rem 2rem;
  border-radius: 8px;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const Step = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 350px;
`;

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

const StepTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: #B0C4D9;
`;

const AppScreens = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const AppScreen = styled.div`
  width: 150px;
  height: 300px;
  background-color: #2D4A62;
  border-radius: 16px;
  border: 2px solid #4361EE;
`;

const Testimonial = styled.div`
  text-align: center;
  margin-top: 3rem;
  color: #B0C4D9;
  font-style: italic;
`;

// Données temporaires
const featuredCategories = [
  {
    id: 1,
    name: "Chanteuses",
    imgUrl: "https://example.com/singer.jpg"
  },
  {
    id: 2,
    name: "Guitaristes",
    imgUrl: "https://example.com/guitarist.jpg"
  },
  {
    id: 3,
    name: "Pianistes",
    imgUrl: "https://example.com/pianist.jpg"
  },
  {
    id: 4,
    name: "Batteurs",
    imgUrl: "https://example.com/drummer.jpg"
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <PageContainer>
        {/* Hero Section */}
        <HeroSection>
          <MainTitle>Trouve Ton Partenaire Musical Avec Nous</MainTitle>
          <HeroDescription>
            La première plateforme qui connecte les musiciens pour des collaborations inoubliables. 
            Trouvez, échangez et créez en toute simplicité.
          </HeroDescription>
          <CTAButton to="/login">Commencer</CTAButton>
        </HeroSection>

        {/* Featured Categories */}
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

        {/* How It Works */}
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