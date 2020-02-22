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


// event heading animation 

let eventh = document.getElementById('eventh')

let loadingPage = document.getElementById("loading")

introImg = new Image();
introImg.src = './img/University/dcrust-7.jpg';
introImg.onload = () => {
    loadingPage.style.display = "none";
    eventh.style.transform = "translateY(-50px) scale(2)"

}