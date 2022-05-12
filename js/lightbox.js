const imagenes = document.querySelectorAll('.media1-galeria')
const media1Light = document.querySelector('.agregar-media1');
const contenedorLight = document.querySelector('.media1-light')
const closeLight = document.querySelector('.close')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerMedia1 = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showMedia1')
    hamburguer.style.opacity = '0';
}