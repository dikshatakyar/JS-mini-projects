const btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
        document.body.style.background=randombg();
});

 
function randombg(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return bgColor;
}