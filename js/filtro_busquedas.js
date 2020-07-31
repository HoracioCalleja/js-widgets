const d = document;

export default function searchFilter(selector_input, selector_busqueda) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(selector_input)) {
      //console.log(e);
      //console.log(e.key);
      // console.log(e.target.value);
      
      if(e.key === "Escape") e.target.value = "";
      
      d.querySelectorAll(selector_busqueda).forEach((el) => {
        if (el.textContent.toLowerCase().includes(e.target.value)) {
          el.classList.remove("mostrar_ocultar");
        } else {
          el.classList.add("mostrar_ocultar");
        }
      });
    }
  });
}
