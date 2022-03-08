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

    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault();
            document.getElementById(item.id + '-details').classList.remove('opacity');
            void document.getElementById(item.id + '-details').offsetWidth;
            document.getElementById(item.id + '-details').classList.add('opacity');
            document.getElementById(item.id + '-details').style.opacity = '1';
            document.getElementById(item.id + '-details').style.display = 'block';
            window.location.href = "#titre-projets";
            document.querySelectorAll('.details-container:not(#' + item.id + '-details)').forEach(con => {
                con.style.display = 'none';
                con.style.opacity = '0';
                con.classList.remove('opacity');
            })
        })
    })

    document.querySelectorAll('.details-container').forEach(item => {
        item.querySelector('.fermer-projet').addEventListener('click', function(e){
            e.preventDefault()
            item.style.display = 'none';
            item.style.opacity = '0';
            item.classList.remove('opacity');
        })
    })