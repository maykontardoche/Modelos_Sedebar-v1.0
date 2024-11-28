// Script para controlar a interação do sidebar
const sidebar = document.getElementById('sidebar');

// Função para abrir o sidebar ao passar o mouse
sidebar.addEventListener('mouseenter', () => {
    sidebar.style.width = '250px';
    const links = document.querySelectorAll('#sidebar ul li a');
    links.forEach(link => {
        link.style.opacity = 1;
    });
});

// Função para fechar o sidebar ao tirar o mouse
sidebar.addEventListener('mouseleave', () => {
    sidebar.style.width = '70px';
    const links = document.querySelectorAll('#sidebar ul li a');
    links.forEach(link => {
        link.style.opacity = 0;
    });
});
