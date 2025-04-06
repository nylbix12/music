import styled from 'styled-components';
import Header from '../components/Header';
import { FaHeart, FaRegHeart, FaMusic } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const ContentBox = styled.div`
  background-color: #12364B;
  padding: 2rem;
  color: white;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #B0C4D9;
  margin-top: 0.5rem;
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid #B0C4D9;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
`;

const ProfilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  height: 650px;
`;

const ProfileImage = styled.div`
  height: 250px;
  background-color: #ddd;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
`;

const ProfileContent = styled.div`
  padding: 1.5rem;
  color: #333;
`;

const Profession = styled.div`
  font-weight: bold;
  color: #4361EE;
  margin-bottom: 0.5rem;
`;

const NameLocation = styled.h3`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const Rating = styled.div`
  color: #FFD700;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const Bio = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 1rem 0;
`;

const KnownSongs = styled.div`
  margin: 1rem 0;
`;

const SongItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ChatButton = styled.button`
  background-color: #4361EE;
  color: white;
  border: none;
  padding: 0.8rem;
  width: 100%;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: bold;
`;

export default function Profiles() {
  const navigate = useNavigate();
  const profiles = [
    {
      id: 1,
      name: "Kameera Morel",
      city: "Paris",
      profession: "Chanteuse Professionnelle",
      rating: 4.8,
      bio: "Chanteuse jazz et soul avec 10 ans d'expérience. J'ai performé dans les plus grands clubs parisiens et collaboré avec des artistes internationaux.",
      songs: ["La Vie en Rose", "Fly Me to the Moon", "Autumn Leaves"],
      image: "./assets/.prof1.jpg" 
    },
    {
      id: 2,
      name: "Sophie Martin",
      city: "Lyon",
      profession: "Chanteuse Pop",
      rating: 4.5,
      bio: "Spécialisée dans les reprises pop modernes et les compositions originales. Parfaite pour vos événements festifs.",
      songs: ["Dance Monkey", "Stay", "Blinding Lights"],
      image: ""
    },
    {
      id: 3,
      name: "Léa Dubois",
      city: "Marseille",
      profession: "Chanteuse Classique",
      rating: 4.9,
      bio: "Formée au conservatoire de Paris, je propose des prestations lyriques pour vos événements prestigieux.",
      songs: ["Ave Maria", "O Mio Babbino Caro", "Habanera"],
      image: ""
    }
  ];

  return (
    <>
      <PageContainer>
        <ContentBox>
          <TitleSection>
            <div>
              <MainTitle>TOP Female singers for hire</MainTitle>
              <Subtitle>Découvrez les voix les plus talentueuses près de chez vous</Subtitle>
            </div>
            <FilterSection>
              <FilterButton>Filters</FilterButton>
              <FilterButton>Recommended</FilterButton>
            </FilterSection>
          </TitleSection>

          <ProfilesGrid>
            {profiles.map(profile => (
              <ProfileCard key={profile.id}>
                <ProfileImage imgUrl={profile.image} />
                <ProfileContent>
                  <Profession>{profile.profession}</Profession>
                  <NameLocation>
                    <span>{profile.name}, {profile.city}</span>
                    <span>
                      <FaRegHeart style={{ cursor: 'pointer' }} />
                    </span>
                  </NameLocation>
                  <Rating>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < Math.floor(profile.rating) ? '★' : '☆'}</span>
                    ))}
                    ({profile.rating})
                  </Rating>
                  <Bio>{profile.bio}</Bio>
                  
                  <KnownSongs>
                    <h4>Chansons connues :</h4>
                    {profile.songs.map((song, index) => (
                      <SongItem key={index}>
                        <FaMusic size={12} />
                        {song}
                      </SongItem>
                    ))}
                  </KnownSongs>
                  
                  <ChatButton 
                  onClick={() => navigate(`/chat/${profile.id}`, { state: { profile } })}
                >
                  Discuter avec {profile.name.split(' ')[0]}
                </ChatButton>
                </ProfileContent>
              </ProfileCard>
            ))}
          </ProfilesGrid>
        </ContentBox>
      </PageContainer>
    </>
  );
}