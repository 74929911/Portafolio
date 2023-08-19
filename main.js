const toastLiveExample = document.getElementById('liveToast');
addEventListener("load",()=>{
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
  })
const toggle_menu = document.getElementById("toggle_menu");
const main_flex = document.getElementById("main_flex");
toggle_menu.addEventListener("click",()=>{
    main_flex.classList.toggle("menu_show");
})
const enviar_formulario = document.getElementById("enviar_formulario");
enviar_formulario.addEventListener("click",(e)=>{
  e.preventDefault();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu mensaje ha sido enviado',
    showConfirmButton: false,
    timer: 1500
  })
  setTimeout(()=>{
    location.reload();
  },2000);
})
const cambio = document.getElementById("cambio");
const Habilidades = document.querySelector(".Habilidades");
let i = 0;
cambio.addEventListener("click",()=>{
  if(i==0){
    cambio.textContent="toggle_off";
    document.documentElement.style.setProperty('--color-apagado','rgb(211, 211, 0)')
    document.documentElement.style.setProperty('--black-color','white');
    document.documentElement.style.setProperty('--background-color','black');
    document.documentElement.style.setProperty('--border-and-content-color','rgb(36, 27, 91)');
    document.documentElement.style.setProperty('--backgroud-global','black');
    document.documentElement.style.setProperty('--background-habilidades','rgb(189, 186, 0)');
    i=1;
  }else{
    cambio.textContent="toggle_on";
    document.documentElement.style.setProperty('--color-apagado','black')
    document.documentElement.style.setProperty('--black-color','black');
    document.documentElement.style.setProperty('--background-color','white');
    document.documentElement.style.setProperty('--border-and-content-color','rgb(246, 246, 246)')
    document.documentElement.style.setProperty('--backgroud-global','white');
    document.documentElement.style.setProperty('--background-habilidades','#08f');
    i=0;
  }
})