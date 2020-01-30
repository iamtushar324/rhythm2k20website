/*know more in about section*/

function myFunction() {
    var dots = document.getElementById("main_page_about_dots");
    var moreText = document.getElementById("main_page_about_more");
    var btnText = document.getElementById("main_page_about_myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
/*know more ends*/

/* Scroll to top button */
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById('main_page_event_heading_h1_id').style.animationName = 'main_page_event_heading_h1_id';

        document.getElementById('main_page_event_heading_h1_id').style.opacity = '1';
    }
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById('main_page_counter_1_id').style.animationName = 'main_page_counter_1';

        document.getElementById('main_page_counter_1_id').style.opacity = '1';
    }
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById('main_page_counter_1_id2').style.animationName = 'main_page_counter_1';

        document.getElementById('main_page_counter_1_id2').style.opacity = '1';
    }
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById('main_page_counter_1_id3').style.animationName = 'main_page_counter_1';

        document.getElementById('main_page_counter_1_id3').style.opacity = '1';
    }
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById('main_page_counter_1_id4').style.animationName = 'main_page_counter_1';

        document.getElementById('main_page_counter_1_id4').style.opacity = '1';
    }
    if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
        document.getElementById('main_page_about_1_id').style.animationName = 'main_page_about_1';
        document.getElementById('main_page_about_1_id').style.opacity = '1';
        document.getElementById('main_page_about_2_id').style.animationName = 'main_page_about_2';
        document.getElementById('main_page_about_2_id').style.opacity = '1';
    }
    if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*scroll to top button ends*/
/* modal images */

window.onload = function() {
    var modal = document.getElementById("myModal");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");
    var img5 = document.getElementById("img5");
    var img6 = document.getElementById("img6");
    var modalImg = document.getElementById("main_page_gallery_content");
    var span = document.getElementsByClassName("main_page_gallery_modal_close")[0];
    console.log(span);
    img1.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
    img6.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
    img2.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
    img3.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
    img4.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
    img5.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });

    span.addEventListener("click", function() {
        modal.style.display = "none";
        console.log('insidev span');
    });
};
/* modal images ends */
/* animations*/

/*animations ends */