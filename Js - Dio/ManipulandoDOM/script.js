// DOM - Document Object model
// BOM - Browser Object model



//EXEMPLOS

// document.getElementById('titulo')
// document.getElementsByClassName('textos')
// document.getElementsByTagName('h1')

// const botao = document.getElementsByClassName('btn')

// botao.addEventListener()

function changeMode() {
    changeClasses()
    chageText()
}


function changeClasses() {
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}

function chageText() {
    const lightMode = 'Light Mode'
    const DarkMode = 'Dark Mode'

    if (body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode
        h1.innerHTML = DarkMode + " ON"
        return;
    }

    button.innerHTML = DarkMode
    h1.innerHTML = lightMode + " ON"
    
    
   
}


//Pegando todos os itens do arquivo HTML
const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode)