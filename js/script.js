// how to navbar be fixed
var navFixed = document.querySelector(".navbar");
var myImg = document.getElementById("my-img");
window.onscroll = function() {
    if(window.pageYOffset >= 400) {
        navFixed.classList.add('navbar-fixed')
        myImg.setAttribute('src','http://www.engage.veented.com/agency/wp-content/themes/engage/img/logos/logo-light.png')
    } else if(window.pageYOffset == 0){
        navFixed.classList.remove('navbar-fixed')
        myImg.setAttribute('src','http://www.engage.veented.com/agency/wp-content/themes/engage/img/logos/logo-dark.png')
    }
}