import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useState } from 'react';

const PageContainer = styled.div`
  background-color: #12364B;
  min-height: 100vh;
  color: white;
`;

const LoginBox = styled.div`
  background-color: #2D4A62;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    margin: 2rem 1rem;
    padding: 1.5rem;
  }
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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  color: #B0C4D9;
`;

const LoginButton = styled.button`
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

// Nouveau composant pour les messages d'erreur
const ErrorMessage = styled.p`
  color: #ff6b6b;
  margin-bottom: 1rem;
  text-align: center;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          password: password 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Échec de la connexion');
      }

      
      localStorage.setItem('authToken', data.token);
      
  
      navigate('/Home');

    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageContainer>
        <LoginBox>
          <Title>Welcome back</Title>
          <Subtitle>Let's make music</Subtitle>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <form onSubmit={handleSubmit}>
            <InputField 
              type="email" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <InputField 
              type="password" 
              placeholder="Your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <CheckboxContainer>
              <input 
                type="checkbox" 
                id="remember" 
                style={{ marginRight: '0.5rem' }} 
              />
              <label htmlFor="remember">Stay signed in</label>
            </CheckboxContainer>
            
            <LoginButton type="submit" disabled={isLoading}>
              {isLoading ? 'Connexion en cours...' : 'Sign In'}
            </LoginButton>
            
            <Link 
              to="/forgot-password" 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                marginTop: '1rem', 
                color: '#B0C4D9' 
              }}
            >
              Forgot password?
            </Link>

            <div style={{ 
              textAlign: 'center', 
              marginTop: '1.5rem',
              color: '#B0C4D9',
              fontSize: '0.9rem'
            }}>
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                style={{ 
                  color: '#4361EE',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  marginLeft: '0.3rem'
                }}
              >
                Sign up
              </Link>
            </div>
          </form>
        </LoginBox>
      </PageContainer>
    </>
  );
}