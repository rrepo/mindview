var element = document.getElementById('title');
window.onload = function () {
  element.scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center',
  });
}

let center_btn = document.querySelector('.center_btn');

center_btn.addEventListener('click',() => {
    element.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center',
    });
});