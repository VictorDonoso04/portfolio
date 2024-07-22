document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('.header__nav .nav__a');


    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {

            event.preventDefault();
            

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
