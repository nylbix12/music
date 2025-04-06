import React, { useState, useEffect } from 'react';// Import des hooks React pour gérer l'état et les effets
import { useNavigate, useLocation } from 'react-router-dom';// Import de navigateurs pour la navigation et l'accès à l'état de la route
import styled from 'styled-components';// Import de styled-components pour styliser le composant

const Messagerie = () => {
  // Hook pour naviguer entre les pages
  const navigate = useNavigate();
  // Hook pour accéder aux informations de la route actuelle
  const location = useLocation();
  // Récupération du profil du destinataire depuis l'état de la route
  const profile = location.state?.profile;
// État local pour stocker les messages et la valeur de l'input
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
// Identifiants de l'utilisateur actuel et du destinataire
  const currentUserId = 1; 
  const recipientId = profile?.id; 

  // Fonction pour récupérer les messages entre l'utilisateur actuel et le destinataire
  const fetchMessages = async () => {
    try {
       // Requête pour récupérer les messages depuis le serveur
      const response = await fetch(
        `http://localhost:8080/messages?sender_id=${currentUserId}&receiver_id=${recipientId}`
      );
      const data = await response.json();// Analyse de la réponse JSON

    // Si la réponse est positive, mise à jour de l'état des messages
      if (data.status === 'success') {
        setMessages(data.messages);
      }
    } catch (error) {
            // En cas d'erreur, affichage de l'erreur dans la console

      console.error('Erreur lors de la récupération des messages', error);
    }
  };
// useEffect est utilisé pour charger les messages au chargement du composant
  // ou lorsque le profil du destinataire change

  useEffect(() => {
    if (profile) {
      fetchMessages();// Appel à la fonction pour récupérer les messages
    }
  }, [profile]);// Dépend de "profile" pour recharger les messages lorsque le profil change
// Fonction pour revenir à la page précédente
  const handleBackClick = () => {
    navigate(-1);
  };
 // Fonction pour envoyer un message
  const handleSend = async () => {
    // Vérifie si le champ de saisie n'est pas vide
    if (input.trim() !== '') {
      // Création d'un nouveau message local (avant d'être envoyé au serveur)
      const newMessage = { from: 'moi', content: input };
      setMessages([...messages, newMessage]);// Mise à jour de l'état avec le nouveau message
      setInput('');// Réinitialisation de l'input

      try {
         // Envoi du message au serveur via une requête POST
        const response = await fetch('http://localhost:8080/messages', {
          method: 'POST',// Méthode POST pour l'envoi
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender_id: currentUserId, // Identifiant de l'expéditeur
            receiver_id: recipientId,// Identifiant du destinataire
            content: input,// Contenu du message
          }),
        });

        const data = await response.json();// Analyse de la réponse du serveur
        if (data.status === 'success') {
          console.log('Message envoyé');// Affichage dans la console si le message est envoyé avec succès
        } else {
          console.error('Erreur lors de l\'envoi du message');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du message', error);  // En cas d'erreur lors de la requête
      }
    }
  };

  return (
    <Container> 
      {/* Barre supérieure avec bouton de retour */}
      <TopBar>
        <BackButton onClick={handleBackClick}>
          <span>Retour</span>
        </BackButton>
      </TopBar>

      <MessagesArea>
        <MessagesList>{/* Liste des messages affichée à l'écran */}
          {messages.map((msg, index) => (
            <Message key={index}>
              <b>{msg.from}:</b> {msg.content}
            </Message>
          ))}
        </MessagesList>

        <MessageInputContainer> {/* Zone de saisie pour un nouveau message */}
          <MessageInput
            placeholder="Écris ton message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}// Mise à jour de l'input lors de la saisie
          />
          <SendButton onClick={handleSend}>Envoyer</SendButton> {/* Envoi du message */}
        </MessageInputContainer>
      </MessagesArea>
    </Container>
  );
};


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
  overflow-y: auto;/* Permet de faire défiler les messages si nécessaire */
`;

const Message = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;/* Bordure pour séparer les messages */
`;

const MessageInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;/* Espacement entre le champ de saisie et le bouton d'envoi */
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
