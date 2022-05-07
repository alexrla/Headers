const $header = document.querySelector(".cabecalho");

// const $imagemLogo = document.querySelectorAll(".container__logo")[0];
const $imagemLogo = document.querySelector(".container__logo");

const $nav = document.querySelector(".menuNavegacao");

window.addEventListener("scroll", mudarCabecalho, false);

function mudarCabecalho() {
    if(window.pageYOffset > 60 && $header.classList.contains("cabecalho__color1"))  {
        $header.classList.remove("cabecalho__color1");
        $header.classList.add("cabecalho__color2");

        $imagemLogo.firstElementChild.setAttribute("src", "./img/omnitech-logo-2.png");

        $imagemLogo.classList.remove("logo__size1");
        $imagemLogo.classList.add("logo__size2");

        $nav.classList.remove("fonte__sizeColor1");
        $nav.classList.add("fonte__sizeColor2");
    }
    else if(window.pageYOffset <= 60 && $header.classList.contains("cabecalho__color2"))    {
        $header.classList.add("cabecalho__color1");
        $header.classList.remove("cabecalho__color2");

        $imagemLogo.firstElementChild.setAttribute("src", "./img/omnitech-logo-1.png");

        $imagemLogo.classList.add("logo__size1");
        $imagemLogo.classList.remove("logo__size2");

        $nav.classList.add("fonte__sizeColor1");
        $nav.classList.remove("fonte__sizeColor2");
    }
}