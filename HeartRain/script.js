function createheart(){
    const heart=document.createElement('div');
    heart.classList.add('heart');

    heart.style.left=Math.random() * 100 + "vw";
    heart.innerText = '💘';

    heart.style.animationDuration=Math.random() * 5 +"s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },5000)
}

setInterval(createheart,300)