const text="Hi, I am Diksha Takyar";

let index=0;

function autowrite(){
    document.body.innerText=text.slice(0,index);

    ++index;

    if(index>text.length){
        index=0;
    }
}

setInterval(autowrite,150)