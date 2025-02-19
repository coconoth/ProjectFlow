// components/kanban/kanban.js
function initKanban() {
  const kanbanSection = document.getElementById('kanban-section');
  kanbanSection.innerHTML = `
    <h2>Quadro Kanban</h2>
    <div class="kanban-board">
      <div class="kanban-column" id="column-todo">
        <h3>A Fazer</h3>
        <div class="kanban-items">
          <div class="kanban-item" draggable="true">Implementar interface do Kanban</div>
          <div class="kanban-item" draggable="true">Configurar arrastar e soltar</div>
        </div>
      </div>
      <div class="kanban-column" id="column-doing">
        <h3>Em Andamento</h3>
        <div class="kanban-items">
          <div class="kanban-item" draggable="true">Integrar funcionalidades do chat</div>
        </div>
      </div>
      <div class="kanban-column" id="column-done">
        <h3>Concluído</h3>
        <div class="kanban-items">
          <div class="kanban-item" draggable="true">Criar estrutura básica do projeto</div>
        </div>
      </div>
    </div>
  `;

  const kanbanItems = document.querySelectorAll('.kanban-item');
  const kanbanColumns = document.querySelectorAll('.kanban-column');

  kanbanItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
  });

  kanbanColumns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);
  });

  let draggedItem = null;

  function dragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text', event.target.textContent); // Set data
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    if (draggedItem) {
      this.querySelector('.kanban-items').appendChild(draggedItem);
    }
  }
}