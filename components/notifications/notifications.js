// components/notifications/notifications.js
function initNotifications() {
  const notificationsSection = document.getElementById('notifications-section');
  notificationsSection.innerHTML = `
    <h2>Notificações</h2>
    <ul class="notification-list">
      <li>
        <span class="notification-icon">🔔</span>
        Nova mensagem de Maria Oliveira
        <span class="notification-time">5 minutos atrás</span>
      </li>
      <li>
        <span class="notification-icon">📅</span>
        Reunião de planejamento agendada para amanhã
        <span class="notification-time">1 hora atrás</span>
      </li>
      <li>
        <span class="notification-icon">✅</span>
        Tarefa "Criar layout do dashboard" concluída
        <span class="notification-time">2 horas atrás</span>
      </li>
       <li>
        <span class="notification-icon">⚠️</span>
        Prazo da tarefa "Implementar funcionalidade de vídeo" se aproxima
        <span class="notification-time">1 dia atrás</span>
      </li>
    </ul>
  `;
}