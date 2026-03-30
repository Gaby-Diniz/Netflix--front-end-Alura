// Armazena o perfil ativo (nome e imagem) no localStorage
document.querySelectorAll('.perfil').forEach(profile => {
    profile.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Seleciona a figura dentro do link clicado
        const figure = profile.querySelector('figure');
        const img = figure.querySelector('img');
        const figcaption = figure.querySelector('figcaption');
        
        // Obtém o nome e o caminho da imagem
        const perfilNome = figcaption.textContent;
        const perfilImagem = img.src;
        
        // Armazena no localStorage
        localStorage.setItem('perfilAtivoNome', perfilNome);
        localStorage.setItem('perfilAtivoImagem', perfilImagem);
        
        // Navega para o catálogo
        window.location.href = profile.href;
    });
});
