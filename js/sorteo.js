const d = document;

export default function sorteo(selector_boton,selector_lista,participantes){
  
  const $ul = d.getElementById(selector_lista),
    $fragment = d.createDocumentFragment();  

    
    const haGanado = () => participantes[Math.floor(Math.random() * participantes.length)]
      
    participantes.forEach(el => {
    const $li = d.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
  })

  $ul.appendChild($fragment)
  
  d.addEventListener("click", e => {
    if(e.target.matches(selector_boton)){
      alert(`Gana el sorteo: ${haGanado()}`)
    }
  })
}