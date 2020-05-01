var botones = document.querySelectorAll("div[type='button']");
function ran() {
    return (Math.floor(Math.random()*10))%4;
}
var pattern = [botones[ran()]]
pressed(pattern[0])
var level = 1, index = 0;

console.log(botones);
botones.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        pressed(boton)
        if(boton.isSameNode(pattern[index])){
           if(index === level-1){
               level++;
               $("h1").html(`Level ${level}`)
               var pushedbutton = botones[ran()];
               pressed(pushedbutton)
               pattern.push(pushedbutton)
               index = 0;
           }else{
               index++;
           } 
        }else{
            lose()
            level = 1;
            index = 0;
            $("h1").html(`Level ${level}`)
            pattern = [botones[ran()]]
        }
        console.log(pattern);
    })
})

function pressed(boton) {
    boton.classList.add("pressed")
    setTimeout(()=>{
        boton.classList.remove("pressed")
    },200)
}

function lose() {
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{document.querySelector("body").style.backgroundColor = "#011F3F" },400)
}

let ingame = false;
document.addEventListener("keypress",() =>{
    if(ingame === false){
        ingame = true;
        $("h1").text(`Level ${level}`)
    }
})

