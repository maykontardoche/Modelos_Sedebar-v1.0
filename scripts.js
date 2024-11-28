// Script para controlar a interação do sidebarr
const sidebar = document.getElementById('sidebar');

// Função para abrir o sidebar ao passar o mouse
sidebar.addEventListener('mouseenter', () => {
    sidebar.style.width = '250px';
});

// Função para fechar o sidebar ao tirar o mouse
sidebar.addEventListener('mouseleave', () => {
    sidebar.style.width = '70px';
});
