let menu_btn = document.getElementById('menu-btn')
let menu_list = document.getElementById('menu-list')
let bar1 = document.getElementsByClassName('bar1')[0]
let bar2 = document.getElementsByClassName('bar2')[0]
let bar3 = document.getElementsByClassName('bar3')[0]


let is_menu_on = false

menu_btn.onclick = () => {
    if (is_menu_on) {
        menu_list.style.left = "100%"
        is_menu_on = false

        bar1.style.transform = "rotateZ(0deg)"
        bar3.style.transform = "rotateZ(0deg)"
        bar2.style.opacity = "1"




    }
    else {
        menu_list.style.left = "60%"
        bar1.style.transform = "rotateZ(-33deg)"
        bar3.style.transform = "rotateZ(33deg)"
        bar2.style.opacity = "0"

        is_menu_on = true

    }

}