/*Função de mostrar o menu*/

const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu ('nav-toggle', 'nav_menu')

/*Remover menu Mobile*/

const navLink = document.querySelectorAll ('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.ofsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)

const sr = scrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal ('.home-data, .about-img, .skills-subtitle, .skills-text',{});
sr.reveal ('.home-img, .about-subtitle, .about.-text, .skills-img', {delay:400});
sr.reveal('.home-social-icon', {interval: 200});
sr.reveal ('.skills-data, .work-img, .contact-input', {interval:200});