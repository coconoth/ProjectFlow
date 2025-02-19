// components/task-list/task-list.js
function initTaskList() {
  const tasksSection = document.getElementById('tasks-section');
  tasksSection.innerHTML = `
    <h2>Lista de Tarefas</h2>
    <ul class="task-list">
      <li>
        <input type="checkbox" id="task1">
        <label for="task1">Implementar funcionalidade de chat</label>
        <span class="task-status">Pendente</span>
      </li>
      <li>
        <input type="checkbox" id="task2" checked>
        <label for="task2">Criar layout do dashboard</label>
        <span class="task-status">Concluído</span>
      </li>
      <li>
        <input type="checkbox" id="task3">
        <label for="task3">Configurar banco de dados</label>
        <span class="task-status">Em andamento</span>
      </li>
    </ul>
    <button class="add-task-button">Adicionar Tarefa</button>
  `;

  const addTaskButton = tasksSection.querySelector('.add-task-button');
  addTaskButton.addEventListener('click', () => {
    alert('Funcionalidade de adicionar tarefa será implementada em breve.');
  });
}