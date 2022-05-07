const $imagemLogo = document.querySelector(".cabecalho__logo ");
const $nav = document.querySelector(".cabecalho__menuNavegacao");
const $linksInternos = document.querySelectorAll(".menuNavegacao__linkInterno a");

window.addEventListener("scroll", mudarNav, false);

function mudarNav() {
    if(window.pageYOffset >= $imagemLogo.offsetHeight && $nav.classList.contains("position__absolute"))   {
        $nav.classList.remove("position__absolute");
        $nav.classList.add("position__fixed");
    }
    else if(window.pageYOffset < $imagemLogo.offsetHeight  && $nav.classList.contains("position__fixed"))   {
        $nav.classList.add("position__absolute");
        $nav.classList.remove("position__fixed");
    }
}


$linksInternos.forEach((elementoAtual) =>  {
    elementoAtual.addEventListener("click", (evento) => {
        evento.preventDefault();

        window.scrollTo({
            top: document.querySelector(elementoAtual.getAttribute("href")).offsetTop - $nav.offsetHeight,
            left: 0,
            behavior: "smooth" 
        });
    }, false);
});

/* 
    Pegando todos os links internos:

    const $linksInternos = document.querySelectorAll(".menuNavegacao__linkInterno");
    const $secoes = document.querySelectorAll(".conteudoPrincipal section");

    $linksInternos.forEach((elementoAtual, index) =>  {
        elementoAtual.addEventListener("click", () => {
            window.scrollTo({
                top: $secoes[index].offsetTop - $nav.offsetHeight,
                left: 0,
                behavior: "smooth" 
            });
        }, false);
    });
*/

/* 
    Pegando um link interno:

    const $linkInterno = document.querySelectorAll(".menuNavegacao__linkInterno")[2];

    const $secaoTransparencia = document.querySelector(".conteudoPrincipal__transparencia");

    linkInterno.addEventListener("click", abrirLinkInterno, false);

    function abrirLinkInterno() {
        <!-- window.scrollTo(0, $secaoTransparencia.offsetTop - $nav.offsetHeight); -->

        window.scrollTo({
            top: $secaoTransparencia.offsetTop - $nav.offsetHeight,
            left: 0,
            behavior: "smooth" 
        });
    }
*/

/* 
    Pegando o link externo:
    
    const $linkExterno = document.querySelector(".menuNavegacao__linkExterno");
    
    $linkExterno.addEventListener("click", abrirLinkExterno, false);

    function abrirLinkExterno() {
        window.open("https://www.blogger.com/", "_blank");
    }
*/