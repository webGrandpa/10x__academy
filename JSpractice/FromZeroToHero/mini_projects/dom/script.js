let header = document.getElementById("header");

let changeBtn = document.getElementById("changing");

changeBtn.addEventListener('click', function(){
    return header.textContent = "changed text"
});

document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})

let styles = document.getElementsByClassName('highlight');

styles.addEventListener('click', function(){
    styles.classList.tiggke('highlight1');
})