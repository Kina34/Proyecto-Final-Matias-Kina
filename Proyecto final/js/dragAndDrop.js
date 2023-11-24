let contenedores=document.querySelectorAll('.drop')
let imagenes=document.querySelectorAll('.imagenes2')


imagenes.forEach(imagen=>{
    imagen.addEventListener('dragstart',()=>{
        console.log('dragstart')
        imagen.classList.add('arrastrado')
    })
    imagen.addEventListener('dragend',()=>{
        imagen.classList.remove('arrastrado')
    })
})
contenedores.forEach(contenedor=>{
    contenedor.addEventListener('dragover',e=>{
        e.preventDefault()
        console.log('drag over')
        const imagen=document.querySelector('.arrastrado')
        contenedor.appendChild(imagen)
    })
})

function reiniciar(){
    window.location.reload();
}