// components/video-call/video-call.js
function initVideoCall() {
  const videoSection = document.getElementById('video-section');
  videoSection.innerHTML = `
    <h2>Videochamadas</h2>
    <div class="video-call-container">
      <div class="local-video">
        <!-- Vídeo local aqui -->
        <video id="localVideo" autoplay muted></video>
      </div>
      <div class="remote-video">
        <!-- Vídeo remoto aqui -->
        <video id="remoteVideo" autoplay></video>
      </div>
      <div class="video-controls">
        <button>Iniciar Chamada</button>
        <button>Encerrar Chamada</button>
        <button>Compartilhar Tela</button>
        <button>Gravar Reunião</button>
      </div>
    </div>
  `;

  // Adicionar lógica de videochamada aqui (WebRTC)
  const startCallButton = videoSection.querySelector('.video-controls button:first-child');
  const endCallButton = videoSection.querySelector('.video-controls button:nth-child(2)');
    const shareScreenButton = videoSection.querySelector('.video-controls button:nth-child(3)');
    const recordMeetingButton = videoSection.querySelector('.video-controls button:nth-child(4)');

  startCallButton.addEventListener('click', () => {
    alert('Funcionalidade de iniciar chamada será implementada em breve.');
  });

  endCallButton.addEventListener('click', () => {
    alert('Funcionalidade de encerrar chamada será implementada em breve.');
  });
  
   shareScreenButton.addEventListener('click', () => {
        alert('Funcionalidade de compartilhar tela será implementada em breve.');
    });

    recordMeetingButton.addEventListener('click', () => {
        alert('Funcionalidade de gravar reunião será implementada em breve.');
    });
}