// components/dashboard/dashboard.js
function initDashboard() {
  const dashboardSection = document.getElementById('dashboard-section');
  dashboardSection.innerHTML = `
    <h2>Visão Geral do Projeto</h2>
    <div class="dashboard-widgets">
      <div class="widget">
        <h3>Progresso do Projeto</h3>
        <div class="progress-chart">
          <!-- Gráfico de progresso aqui -->
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="45" stroke="#eee" stroke-width="8" fill="none"></circle>
            <circle cx="50" cy="50" r="45" stroke="#4CAF50" stroke-width="8" fill="none"
              stroke-dasharray="282.74" stroke-dashoffset="84.82"></circle>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20">70%</text>
          </svg>
        </div>
      </div>
      <div class="widget">
        <h3>Próximas Tarefas</h3>
        <ul class="upcoming-tasks">
          <li>Reunião de planejamento - Amanhã</li>
          <li>Apresentação para o cliente - 05/07</li>
          <li>Entrega do protótipo - 10/07</li>
        </ul>
      </div>
      <div class="widget">
        <h3>Membros da Equipe</h3>
        <ul class="team-members">
          <li>João Silva</li>
          <li>Maria Oliveira</li>
          <li>Carlos Pereira</li>
        </ul>
      </div>
       <div class="widget">
        <h3>Análise de Sentimento da Equipe</h3>
        <div class="sentiment-analysis">
          <p>Nível de estresse da equipe: Baixo</p>
        </div>
      </div>
    </div>
  `;
}