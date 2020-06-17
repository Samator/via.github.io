const moreBtn = document.querySelector('#more');
const backBtn = document.querySelector('.button_back');
const blockMore = document.querySelector('.block-info');

moreBtn.addEventListener('click', function(){
    blockMore.style.display = "flex";
});

backBtn.addEventListener('click', function(){
    blockMore.style.display = "none";
});



const animHover = document.querySelector('#img');
const icon = document.querySelector('#icon');
    animHover.addEventListener('click', function(){
        icon.classList.toggle("t");
});


/*______________АНИМАЦИЯ___________________*/
