// components/gantt/gantt.js
function initGantt() {
  const ganttSection = document.getElementById('gantt-section');
  ganttSection.innerHTML = `
    <h2>Timeline do Projeto (Gantt Chart)</h2>
    <div class="gantt-chart">
      <table class="gantt-table">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Duração</th>
            <th>Progresso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Criar estrutura básica do projeto</td>
            <td>2024-07-01</td>
            <td>2024-07-05</td>
            <td>5 dias</td>
            <td>
              <div class="task-bar" style="width: 100%;">100%</div>
            </td>
          </tr>
          <tr>
            <td>Implementar funcionalidade de chat</td>
            <td>2024-07-06</td>
            <td>2024-07-15</td>
            <td>10 dias</td>
            <td>
              <div class="task-bar" style="width: 70%;">70%</div>
            </td>
          </tr>
          <tr>
            <td>Configurar banco de dados</td>
            <td>2024-07-16</td>
            <td>2024-07-20</td>
            <td>5 dias</td>
            <td>
              <div class="task-bar" style="width: 30%;">30%</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}