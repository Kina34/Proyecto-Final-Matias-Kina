let video=document.querySelector("video")
let tiempoCompleto=document.querySelector(".tiempoCompleto")
let tiempoActual=document.querySelector(".tiempoActual")
let intervalo;
let PlayPausa=document.querySelector("#PlayPausa")
let PlayPausa2=document.querySelector("#PlayPausa2")
let minutosActual=0
PlayPausa.addEventListener('click',()=>{
    video.play()
    intervalo=setInterval(()=>{
        console.log(tiempoActual.textContent=(video.currentTime.toFixed(0))
    )},1000)
    //cuando llegue a 60 dividir por 60 que el resultado son los minutos y el resto son los segundos
})
PlayPausa2.addEventListener('click',()=>{
    video.pause()
    clearInterval(intervalo)
})
const transformacion=(tiempoCompleto)=>{
    let segundos=video.duration.toFixed(0);
    let minutos=0;
    while(segundos>60){
        minutos=minutos+1;
        segundos=segundos-60;
    }
    return minutos+":"+segundos
}
window.addEventListener('load',()=>{
    tiempoCompleto.textContent=transformacion(video.duration)
})