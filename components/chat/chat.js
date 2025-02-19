// components/chat/chat.js
function initChat() {
  const chatSection = document.getElementById('chat-section');
  chatSection.innerHTML = `
    <h2>Chat em Tempo Real</h2>
    <div class="chat-container">
      <div class="chat-messages">
        <div class="message received">
          Olá! Como vai o desenvolvimento?
        </div>
        <div class="message sent">
          Tudo bem por aqui! Avançando nas tarefas.
        </div>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Digite sua mensagem...">
        <button>Enviar</button>
        <button>Enviar Áudio</button>
        <button>Enviar Vídeo</button>
      </div>
      <div class="chat-summary">
        <strong>Resumo da Conversa:</strong>
        <p>Discussão sobre o progresso do desenvolvimento e tarefas em andamento.</p>
      </div>
    </div>
  `;

  const chatInput = chatSection.querySelector('.chat-input input');
  const sendButton = chatSection.querySelector('.chat-input button:first-child');
  const sendAudioButton = chatSection.querySelector('.chat-input button:nth-child(2)');
  const sendVideoButton = chatSection.querySelector('.chat-input button:nth-child(3)');

  sendButton.addEventListener('click', () => {
    const messageText = chatInput.value;
    if (messageText.trim() !== '') {
      // Adicionar a mensagem à interface do chat
      const chatMessages = chatSection.querySelector('.chat-messages');
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', 'sent');
      newMessage.textContent = messageText;
      chatMessages.appendChild(newMessage);

      // Limpar a entrada de texto
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }
  });

  sendAudioButton.addEventListener('click', () => {
    alert('Funcionalidade de mensagem de áudio será implementada em breve.');
  });

  sendVideoButton.addEventListener('click', () => {
    alert('Funcionalidade de mensagem de vídeo será implementada em breve.');
  });

  // Scroll to the bottom of the chat messages on load
  const chatMessages = chatSection.querySelector('.chat-messages');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}