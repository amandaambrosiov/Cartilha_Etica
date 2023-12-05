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
