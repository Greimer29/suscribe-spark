document.addEventListener('DOMContentLoaded', () =>{
    // Get navbar-burger element
    const navbarBurger = document.querySelector('.navbar-burger');

    // Add click event
    navbarBurger.addEventListener('click', () =>{

        // Get the target
        const target = document.getElementById(navbarBurger.dataset.target);

        // Toggle the 'is-active' on the 'navbar-burger' and the 'navbar-menu'
        navbarBurger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    });
});
