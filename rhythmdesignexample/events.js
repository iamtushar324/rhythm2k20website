document.body.addEventListener('click', shift);

window.onscroll;

function shift(e) {
    if (e.target.parentElement.classList.contains('events_list_item')) {
        const events = document.getElementById('Events');
        events.style.transform = 'translateX(-50%)';
        // events.style.marginLeft = '-50%';
        document.body.style.overflow = 'hidden';
        document.querySelector('.events_info').style.display = 'block';
        const event_info = document.getElementById('Event_info');
    }

}

function shiftRight() {
    const events = document.getElementById('Events');
    events.style.transform = 'translateX(0%)';
    document.body.style.overflow = 'auto';
    document.querySelector('.events_info').style.display = 'none';
};

// document.body.addEventListener('mouseover', visible);

// function visible(e) {
//     if (e.target.parentElement.classList.contains('events_list_item')) {
//         const parent = e.target.parentElement;
//         const toVisible = parent.lastElementChild;
//         toVisible.style.transform = 'translateX(-50%)';
//         toVisible.style.display = 'flex';
//         toVisible.style.top = '50%';
//     }
// }

// document.body.addEventListener('mouseout', hide);

// function hide(e) {
//     if (e.target.parentElement.classList.contains('events_list_item')) {
//         const parent = e.target.parentElement;
//         const toVisible = parent.lastElementChild;
//         toVisible.style.top = '100%';
//         toVisible.style.display = 'none';
//     }
// }