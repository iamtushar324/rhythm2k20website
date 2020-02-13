let nav_btn = document.getElementById('menu-btn')
let nav_list = document.getElementById('nav-list')
let bar1 = document.getElementsByClassName('bar1')[0]
let bar2 = document.getElementsByClassName('bar2')[0]
let bar3 = document.getElementsByClassName('bar3')[0]


let is_nav_on = false

nav_btn.onclick = () => {
    if (is_nav_on) {
        nav_list.style.left = "100%"
        is_nav_on = false

        bar1.style.transform = "rotateZ(0deg)"
        bar3.style.transform = "rotateZ(0deg)"
        setTimeout(() => { bar2.style.opacity = "1" }, 150)
        nav_list.style.boxShadow = ""




    }
    else {

        nav_list.style.left = "50%"
        bar1.style.transform = "rotateZ(-45deg) scale(0.8)"
        bar3.style.transform = "rotateZ(45deg) scale(0.8)"
        bar2.style.opacity = "0"
        is_nav_on = true

    }

}


// for loading page
let loadingPage = document.getElementById("loading")

introImg = new Image();
introImg.src = './img/University/dcrust-7.jpg';
introImg.onload = () => {
    loadingPage.style.display = "none";

}



// fest video for screen

let isVideoOn = false;
$("#about-img")[0].onclick = () => {
    if (!(isVideoOn)) {
        $("#fest-video")[0].style.display = "block";
        $("#fest-video-overlay")[0].style.display = "block";
        isVideoOn = true;
    }


}


$("#fest-video-overlay")[0].onclick = () => {
    if (isVideoOn) {
        $("#fest-video")[0].style.display = "none";
        isVideoOn = false;
        $("#fest-video-overlay")[0].style.display = "none";

        $("#fest-video").stopVideo();

    }

    else { }

    $("#fest-video-overlay")[0].style.display = "none";

    $('#full-img')[0].style.display = "none"




}





// nav bar 
$(".home")[0].onclick = () => {
    window.location.href = "index.html"
}

$(".about")[0].onclick = () => {
    // window.scroll(0, findPos($(".about")[0]))
    // $("#about")[0].focus();
    // EPPZScrollTo.scrollVerticalToElementById('about')
    $("#about")[0].scrollIntoView(true);
    window.scrollBy(0, -100);
}


// for gallery 
function onimgclick(aa) {

    $('#full-img')[0].src = $(`.img_${aa}`)[0].src
    $('#full-img')[0].style.display = "block"
    $('#fest-video-overlay')[0].style.display = "block"




}

