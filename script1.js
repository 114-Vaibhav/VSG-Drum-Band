let vg=document.querySelectorAll(".a");


for(let i=0;i<7;i++){
    document.querySelectorAll(".a")[i].addEventListener("click",function(){
        var inner = this.innerText;
        // alert(inner)
        makesound(inner);
        animation(inner);
    })
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
})

function makesound(key){
    switch(key){
        case "a":
            let asound = new Audio('sounds/tom-1.mp3');
            asound.play();
            break;
        case "s":
            let bsound = new Audio('sounds/tom-2.mp3');
            bsound.play();
            break;
        case "d":
            let csound = new Audio('sounds/tom-3.mp3');
            csound.play();
            break;
        case "f":
            let dsound = new Audio('sounds/tom-4.mp3');
            dsound.play();
            break;
        case "j":
            let esound = new Audio('sounds/crash.mp3');
            esound.play();
            break;
        case "k":
            let fsound = new Audio('sounds/kick-bass.mp3');
            fsound.play();
            break;
        case "l":
            let gsound = new Audio('sounds/snare.mp3');
            gsound.play();
            break;
        default: console.log(key);
    }
}

function animation(key){
    var x= document.querySelector("."+key);
    x.classList.add("pressed");
    setTimeout(function(){
        x.classList.remove("pressed")
    },100)
}