const hamburger = document.querySelector(".hamburger");
const navCollapse = document.querySelector(".nav-collapse");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navCollapse.classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navCollapse.classList.remove("active");
    });
});



document.addEventListener("DOMContentLoaded", function () {


    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page refresh

        const emailValue = emailInput.value.trim();


        if (emailValue === "" || !emailPattern.test(emailValue)) {
            emailError.style.display = 'block';
            emailSuccess.style.display = 'none';
            emailInput.style.borderColor = '#ffd700';
        } else {

            emailError.style.display = 'none';
            window.location.href = '404.html';
            emailSuccess.style.display = 'block';
            emailInput.style.borderColor = '#ffffff';


            setTimeout(() => {
                emailInput.value = "";
                emailSuccess.style.display = 'none';
                contactForm.reset();
            }, 3000);
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector('.navbar');


    window.addEventListener('scroll', function () {


        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }

        else {
            navbar.classList.remove('scrolled');
        }
    });

});