// Quando a página é carregada
window.onload = function () {
    // Adiciona um ouvinte de evento para o scroll
    window.addEventListener('scroll', scrollFunction);
  };
  
  // Função para verificar a posição do scroll
  function scrollFunction() {
    var scrollBtn = document.getElementById('myBtn');
  
    // Se a posição do scroll for maior que 300 pixels, mostra o botão, caso contrário, oculta
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const icon = document.getElementById('icon');
    const body = document.body;

    // Verificar se o usuário já escolheu um tema anteriormente
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Aplicar o tema escuro, se necessário
    if (isDarkMode) {
        body.classList.add('dark-mode');
        icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
    }

    // Alternar entre os modos claro e escuro
    toggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');


        // Atualizar o ícone de acordo com o modo
        if (isDarkMode) {
            icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
            localStorage.setItem('darkMode', null);
        }
    });
});


