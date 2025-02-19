document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navigation a');
  const sections = document.querySelectorAll('section');

  function showSection(sectionId) {
    sections.forEach(section => {
      section.classList.add('hidden');
    });
    document.getElementById(sectionId + '-section').classList.remove('hidden');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      showSection(sectionId);
    });
  });

  // Show default section (Dashboard)
  showSection('dashboard');

  // Initialize components
  initDashboard();
  initTaskList();
  initNotifications();
  initVideoCall();
  initKanban();
  initGantt();
  initChat(); // Initialize chat last, after the element exists
});