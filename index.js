    window.addEventListener('scroll', () => {
        if(window.scrollY > (0.25 * document.getElementById('about-elements').offsetTop)){
            document.getElementById('about-elements').style.animation = '1s ease-in apparition';
            document.getElementById('about-elements').style.opacity = 1;
        };
    });

    window.addEventListener('scroll', () => {
        if(window.scrollY > (0.5 * document.getElementById('projets').offsetTop)){
            document.getElementById('projets').style.animation = '1s ease-in apparition';
            document.getElementById('projets').style.opacity = 1;
        };
    });