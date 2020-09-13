import hamburgerMenu from "./menu_hamburguesa.js"
import darkTheme from "./dark-theme.js"
import responsiveMedia from "./responsive.js"
import responsiveTester from "./responsive-tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import newtworkStatus from "./deteccion_red.js";
import searchFilter from "./filtro_busquedas.js";
import sorteo from "./sorteo.js";
import formValidation from "./form_validation.js";

const d = document;

const responsiveObj = {
  yt_d : `<iframe width="560" height="315" src="https://www.youtube.com/watch?v=kjBJY2oHu_Y frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  gm_d : `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.426695569784!2d-58.4623338843366!3d-34.54275028047532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58ba24ecf55%3A0x24ade018f9224973!2smonumental!5e0!3m2!1ses-419!2sar!4v1595257379500!5m2!1ses-419!2sar" width="600" height="450" frameborder="0"></iframe>`,
  yt_m : `<a href="https://www.youtube.com/watch?v=kjBJY2oHu_Y" target="_blank" rel="noopener noreferrer" >Ir al video</a>`,
  gm_m: `<a href="https://goo.gl/maps/rFg55Z571GdYu5G46" target="_blank" rel="noopener noreferrer"  > Ir a google maps </a>`
};

const participantes = ["Juan","Pedro","Maria","Lisa","Hector","Pablo","Marta"];

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn",".panel",".menu a");
  responsiveMedia("youtube","(min-width:1024px)",responsiveObj.yt_m,responsiveObj.yt_d)
  responsiveMedia("google-maps","(min-width:1024px)",responsiveObj.gm_m,responsiveObj.gm_d)
  responsiveTester("formulario-tester");
  userDeviceInfo("user-device");
  searchFilter(".card-filter",".card");
  sorteo("#enviar_sorteo","lista",participantes);
  formValidation();
})



/*
Saco la funcion darkTheme porque dentro de ella llamo al eventos
"DOMContentLoaded" y este no puede ser llamado dos veces
dentro de un mismo contexto
*/
darkTheme(".dark-btn","dark-theme")

newtworkStatus();