
export default function darkTheme (panel,claseDark)  {
  const d = document,
  ls = localStorage,
  $selectores = d.querySelectorAll("[data-dark]"),
  dark = "🌙", 
  light = "🌞",
  $btn = d.querySelector(".dark-btn");
  

  const lightMode = () => {
    $selectores.forEach(el => {
      el.classList.remove(claseDark)
    });
    $btn.textContent = dark;
    $btn.classList.remove()
    ls.setItem("theme","light");
  }
  const darkMode = () => {
    $selectores.forEach(el => {
      el.classList.add(claseDark)
    })
    $btn.textContent = light;
    ls.setItem("theme","dark");
  }

  d.addEventListener("click", e => {

    if(e.target.matches(panel)){
      if($btn.textContent === dark){        
        darkMode();
      } else {
        lightMode();
      }
    }
  })
  
  //GUARDO EN LOCAL STORAGE PARA QUE PERSISTA LA FUNCION DE DARK O LIGHT
  d.addEventListener("DOMContentLoaded", () => {
    if(ls.getItem("theme") === null)ls.setItem("theme","light");
    if(ls.getItem("theme") === "light") lightMode();
    if(ls.getItem("theme") === "dark") darkMode();

  })
  
}