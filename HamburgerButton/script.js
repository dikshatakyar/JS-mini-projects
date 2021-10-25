const btn=document.getElementById('btn');
const navs=document.getElementById('navs');


btn.addEventListener("click",()=>{
    navs.classList.toggle('slide');
    btn.classList.toggle('slide');
});