const $header = document.querySelector(".cabecalho");

// const $imagemLogo = document.querySelectorAll(".container__logo")[0];
const $imagemLogo = document.querySelector(".container__logo");

const $nav = document.querySelector(".container__menuNavegacao"); 

const $lista = document.querySelector(".menuNavegacao");

const $menu = document.querySelector(".menu");

let abrir = false;

window.addEventListener("scroll", mudarCabecalho, false);

function mudarCabecalho() {
    if(window.pageYOffset > 60 && $header.classList.contains("cabecalho__colorHeight1"))  {
        $header.classList.remove("cabecalho__colorHeight1");
        $header.classList.add("cabecalho__colorHeight2");

        // $imagemLogo.firstElementChild.setAttribute("src", "./img/omnitech-logo-2.png");

        $imagemLogo.classList.remove("logo__sizeColor1");
        $imagemLogo.classList.add("logo__sizeColor2");

        $nav.classList.remove("nav__size1");
        $nav.classList.add("nav__size2");

        $lista.classList.remove("fonte__sizeColor1");
        $lista.classList.add("fonte__sizeColor2");

        $menu.firstElementChild.classList.remove("menu__color1");
        $menu.firstElementChild.classList.add("menu__color2");
    }
    else if(window.pageYOffset <= 60 && $header.classList.contains("cabecalho__colorHeight2"))    {
        $header.classList.add("cabecalho__colorHeight1");
        $header.classList.remove("cabecalho__colorHeight2");

        // $imagemLogo.firstElementChild.setAttribute("src", "./img/omnitech-logo-1.png");

        $imagemLogo.classList.add("logo__sizeColor1");
        $imagemLogo.classList.remove("logo__sizeColor2");

        $nav.classList.add("nav__size1");
        $nav.classList.remove("nav__size2");

        $lista.classList.add("fonte__sizeColor1");
        $lista.classList.remove("fonte__sizeColor2");

        $menu.firstElementChild.classList.add("menu__color1");
        $menu.firstElementChild.classList.remove("menu__color2");
    }
}

/* Mobile */
$menu.addEventListener("click", exibirMenu, false);

function exibirMenu()   {
    if(!abrir)   {
        $nav.classList.add("abrirMenu");
        abrir = true;

        $menu.firstElementChild.classList.add("fechar");
    }    
    else    {
        $nav.classList.remove("abrirMenu");
        abrir = false;

        $menu.firstElementChild.classList.remove("fechar");
    }
}

$nav.addEventListener("click", removerMenu, false);

function removerMenu(evento)  {
    if(evento.target.tagName === "A")   {
        exibirMenu();
    }
}