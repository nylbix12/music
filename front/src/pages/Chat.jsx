import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Messagerie = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const profile = location.state?.profile;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const currentUserId = 1; // Remplace par ton ID réel lorsque tu as l'authentification
  const recipientId = profile?.id; // ID du destinataire qui est le profil sélectionné

  // Fonction pour récupérer les messages depuis l'API
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/messages?sender_id=${currentUserId}&receiver_id=${recipientId}`
      );
      const data = await response.json();

      // Si la réponse est correcte, on met à jour les messages
      if (data.status === 'success') {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des messages', error);
    }
  };

  // Appeler fetchMessages lorsque profile change
  useEffect(() => {
    if (profile) {
      fetchMessages();
    }
  }, [profile]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSend = async () => {
    if (input.trim() !== '') {
      const newMessage = { from: 'moi', content: input };
      setMessages([...messages, newMessage]);
      setInput('');

      try {
        const response = await fetch('http://localhost:8080/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender_id: currentUserId, // Ton ID
            receiver_id: recipientId, // ID du profil sélectionné
            content: input,
          }),
        });

        const data = await response.json();
        if (data.status === 'success') {
          console.log('Message envoyé');
        } else {
          console.error('Erreur lors de l\'envoi du message');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du message', error);
      }
    }
  };

  return (
    <Container>
      <TopBar>
        <BackButton onClick={handleBackClick}>
          <span>Retour</span>
        </BackButton>
      </TopBar>

      <MessagesArea>
        <MessagesList>
          {messages.map((msg, index) => (
            <Message key={index}>
              <b>{msg.from}:</b> {msg.content}
            </Message>
          ))}
        </MessagesList>

        <MessageInputContainer>
          <MessageInput
            placeholder="Écris ton message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SendButton onClick={handleSend}>Envoyer</SendButton>
        </MessageInputContainer>
      </MessagesArea>
    </Container>
  );
};

// Styled components (inchangés)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const MessagesArea = styled.div`
  flex: 1;
  padding: 1rem;
`;

const MessagesList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Message = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

const MessageInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SendButton = styled.button`
  padding: 0.6rem 1rem;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Messagerie;
