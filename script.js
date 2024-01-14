const bar = document.querySelector('.bar');
const close = document.querySelector('#close');
const nav = document.getElementById('navbar1');

if (bar) {
    bar.addEventListener('click', function(){
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', function(){
        nav.classList.remove('active');
    });
}




