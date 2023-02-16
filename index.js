const T_Button = document.getElementsByClassName('toggle-button')[0];
const T_Link = document.getElementsByClassName('navbar-links')[0];

T_Button.addEventListener('click', function(){
    T_Link.classList.toggle('active')
})