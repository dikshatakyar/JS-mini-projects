
const text="I hope that the flaming sparks of the lamps of Diwali which burns like a shooting star, guide your way through your dreams ! ";


let index=0;

function autowrite(){
    document.querySelector('.text').innerText=text.slice(0,index);

    ++index;
    setTimeout(autowrite,100);
    // if(index>text.length){
    //     index=0;
    // }
}

// setInterval(autowrite,100);

autowrite();




function creatediya(){
    const diya=document.createElement('div');
    diya.classList.add('diyas');

    diya.style.left=Math.random() * 100 + "vw";
    diya.innerText='✨';

    diya.style.animationDuration=Math.random() * 5 + "s";

    document.body.appendChild(diya);

    setTimeout(()=>{
        diya.remove();
    },5000)
}


setInterval(creatediya,300);

