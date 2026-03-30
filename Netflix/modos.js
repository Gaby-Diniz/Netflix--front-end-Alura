const body = document.body;
const toggle = document.getElementById('theme-toggle');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const sectionTitle = document.querySelector('section h2');

let currentTheme = localStorage.getItem('netflix-theme') || 'dark';

const themes = {
    dark: {
        background: '#141414',
        text: '#ffffff',
        header: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        footer: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
        cardBorder: '#e50914',
        muted: '#b3b3b3'
    },
    light: {
        background: '#f4f4f4',
        text: '#1a1a1a',
        header: 'linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%)',
        footer: 'linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%)',
        cardBorder: '#e50914',
        muted: '#333333'
    }
};

// Aplica o tema selecionado ao body e aos elementos do layout
const applyTheme = (theme) => {
    const config = themes[theme] || themes.dark;

    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(`${theme}-mode`);

    document.documentElement.style.setProperty('--profile-hover-color', theme === 'dark' ? '#ffffff' : '#000000');

    body.style.backgroundColor = config.background;
    body.style.color = config.text;

    if (header) {
        header.style.background = config.header;
    }

    if (footer) {
        footer.style.background = config.footer;
    }

    if (sectionTitle) {
        sectionTitle.style.color = config.muted;
    }

    if (toggle) {
        toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    document.querySelectorAll('.profile img').forEach(img => {
        img.style.borderColor = config.cardBorder;
    });

    if (footer) {
        const footerParagraph = footer.querySelector('p');
        if (footerParagraph) {
            footerParagraph.style.color = config.muted;
        }
    }

    const headerParagraph = header ? header.querySelector('p') : null;
    if (headerParagraph) {
        headerParagraph.style.color = config.muted;
    }

    localStorage.setItem('netflix-theme', theme);
};

// Inicializa o tema na carga da página
applyTheme(currentTheme);

// Alterna o tema entre dark e light ao clicar no botão
if (toggle) {
    toggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });
}
