import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PageContainer = styled.div`
  background-color: #12364B;
  min-height: 100vh;
  color: white;
`;

const SignupBox = styled.div`
  background-color: #2D4A62;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #B0C4D9;
  margin-bottom: 2rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #3A5A76;
  color: white;
  
  &::placeholder {
    color: #B0C4D9;
  }
`;

const SubmitButton = styled.button`
  background-color: #4361EE;
  color: white;
  border: none;
  padding: 1rem 2rem;
  width: 100%;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3A56D4;
  }
`;

export default function Signup() {
  return (
    <>
      <PageContainer>
        <SignupBox>
          <Title>Nice to meet you</Title>
          <Subtitle>We can't wait to make music with you</Subtitle>
          
          <form>
            <InputField 
              type="email" 
              placeholder="Enter your email address" 
              required
            />
            
            <SubmitButton type="submit">Send Code</SubmitButton>
          </form>
        </SignupBox>
      </PageContainer>
    </>
  );
}