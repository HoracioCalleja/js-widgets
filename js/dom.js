/*
console.log('**ELEMENTOS DEL DOCUMENTO')
console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
setTimeout(() => {
  console.log(document.getSelection().toString())
}, 3000)

document.write('<h2>Hola Mundo desde el Dom </h2>') */

// obteniendo los valores de las etiquetas

/*
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('card'))
console.log(document.getElementsByName('nombre'))
console.log(document.getElementById('menu'))

console.log(document.querySelector('#menu'))
console.log(document.querySelectorAll('.card'))

console.log(document.querySelectorAll('a'))
console.log(document.querySelectorAll('a').length)

console.log(document.querySelectorAll('.card')[1])
console.log(document.querySelectorAll('#menu li'))

document.querySelectorAll('#menu li').forEach(el => console.log(el))

/ --------------------------------------------





// ACCEDIENDO A LOS ATRIBUTOS

/*
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute('lang'))
console.log(document.querySelector('.link-dom').href)
console.log(document.querySelector('.link-dom').getAttribute('href'))

document.documentElement.lang = 'en'
console.log(document.documentElement.getAttribute('lang'))

const $linkDom = document.querySelector('.link-dom')

$linkDom.setAttribute('target', '_blank')
$linkDom.setAttribute('rel', 'noopener')
$linkDom.setAttribute('href', 'https://google.com')
$linkDom.setAttribute('data-description', 'DOCUMENT OBJECT MODEL')
$linkDom.setAttribute('data-id', '1')

console.log($linkDom.hasAttribute('rel'))
$linkDom.removeAttribute('rel')
console.log($linkDom.hasAttribute('rel'))



// DATA ATRIBUTES

console.log($linkDom.getAttribute('data-description'))
console.log($linkDom.dataset)
console.log($linkDom.dataset.id)
console.log($linkDom.dataset.description)
$linkDom.setAttribute('data-description', 'Modelo de Objeto Del Documento')
console.log($linkDom.dataset.description)
$linkDom.dataset.description = 'IR A LA PAGINA DE GOOGLE'
console.log($linkDom.dataset.description)
*/

// ESTILOS Y VARIABLES

/*

const $linkDOM = document.querySelector('.link-dom')

console.log($linkDOM.style)
console.log($linkDOM.getAttribute('style'))
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color)
console.log(window.getComputedStyle($linkDOM))
console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'))
console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'))
console.log($linkDOM.getAttribute('href'))

$linkDOM.style.setProperty('text-decoration', 'none')
$linkDOM.style.setProperty('display', 'block')
$linkDOM.style.width = '50%'
$linkDOM.style.textAlign = 'center'
$linkDOM.style.marginLeft = 'auto'
$linkDOM.style.marginRight = 'auto'
$linkDOM.style.padding = '1rem'
$linkDOM.style.borderRadius = '.5rem'

console.log($linkDOM.getAttribute('style'))
console.log(window.getComputedStyle($linkDOM))
*/

// Variables CSS - Custom Properties CSS

/*
const $html = document.documentElement
const $body = document.body

let varDarkColor = window.getComputedStyle($html).getPropertyValue('--dark-color')
let varYellowColor = window.getComputedStyle($html).getPropertyValue('--yellow-color')

console.log(varDarkColor, varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

$html.style.setProperty('--dark-color', 'green')
$html.style.setProperty('--yellow-color', 'white')

varYellowColor = window.getComputedStyle($html).getPropertyValue('--yellow-color')
varDarkColor = window.getComputedStyle($html).getPropertyValue('--dark-color')

$body.style.setProperty('background-color', varDarkColor)
$body.style.setProperty('color',  varYellowColor)
*/

// clases CSS

/*
const $card = document.querySelector('.card')

// retorna el html donde se encuentra la clase
console.log($card)

// retorna el valor de la clase, en este caso 'card'
console.log($card.className)

// devuelve un DOMtokenList con los valores de las  clases y la longitud
console.log($card.classList)

// devuelve true o false si el elemento contiene esa clase
console.log($card.classList.contains('rotate-45'))

// agrega las clases al elemento separandolas por comas si es que se necesita agregar mas de una
console.log($card.classList.add('rotate-45'))
console.log($card.classList.contains('rotate-45'))
console.log($card.classList)

// funciona igual que add
$card.classList.remove('rotate-45')
console.log($card.classList)

$card.classList.remove('rotate-45')

// El metodo toggle agrega la clase si no está presente
//  o la remueve si está presente
$card.classList.toggle('rotate-45')
console.log($card.classList.contains('rotate-45'))
$card.classList.toggle('rotate-45')
console.log($card.classList.contains('rotate-45'))

$card.classList.add('rotate-45')

// reemplaza el primer parametro (clase) con el segundo (otra clase)
$card.classList.replace('rotate-45', 'rotate-135')

$card.classList.add('opacity-80', 'sepia')

$card.classList.remove('opacity-80', 'sepia')
*/

// MODIFICAR TEXTO Y HTML

const $whatIsDOM = document.getElementById("que-es");

const text = `
  <p>
  El Modelo de Objetos del Documento (<b> <i> Dom - Document Object Model </i> </b>) es una Api para documentos HTML y XML
  </p>
  <p>
  Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante el código JS.
  </p>
  <p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.
    </p>
`;
// cuando se necesita insertar TEXTO PLANO SIN ETIQUETAS
$whatIsDOM.textContent = text;

// cuando se necesita insertar HTML
$whatIsDOM.innerHTML = text;

// TRAVERSING -> (RECORRIDO DEL DOCUMENTO HTML) ENFOCADO A LAS ETIQUETAS HTML

/*
const $cards = document.querySelector('.cards')

console.log($cards)
console.log($cards.children)
console.log($cards.children[2])

console.log($cards.parentElement)

console.log($cards.firstElementChild)
console.log($cards.lastElementChild)

console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)

console.log($cards.closest('div'))
console.log($cards.closest('body'))
console.log($cards.children[3].closest('section'))
*/

// --------------------CREANDO ELEMENTOS Y FRAGMENTOS----------------

/*
 const $figure = document.createElement("figure"),
 $img = document.createElement("img"),
 $figcaption = document.createElement("figcaption"),
 $figcaptionText = document.createTextNode("Animals"),
 $cards = document.querySelector(".cards"),
 $figure2 = document.createElement("figure");

$figcaption.appendChild($figcaptionText);

$figure.appendChild($img);
$figure.appendChild($figcaption);

$figure.setAttribute("class", "card");
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");

$cards.appendChild($figure);

$figure2.innerHTML = `
 <img src = "https://placeimg.com/200/200/people alt="People>
 <figcaption> People </figcaption>
 `;

$figure2.classList.add("card");
$cards.append($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invieno"],
 $ul = document.createElement("ul");

document.write("<h2>ESTACIONES DEL AÑO </h2>");

document.body.appendChild($ul);

estaciones.forEach((el) => {
 const $li = document.createElement("li");
 $li.innerText = el;
 $ul.appendChild($li);
});

const continentes = ["Africa", "Asia", "America", "Oceanía"],
 $ul2 = document.createElement("ul");

document.write("<h2> CONTINENTES </h2>");
document.body.appendChild($ul2);

continentes.forEach((el) => {
 $ul2.innerHTML += `<li>${el}</li>`;
});

const meses = [
 "Enero",
 "Febrero",
 "Marzo",
 "Abril",
 "Mayo",
 "Junio",
 "Julio",
 "Agosto",
 "Septiembre",
 "Octubre",
 "Noviembre",
 "Diciembre",
];

const $ul3 = document.createElement("ul"),
 $fragment = document.createDocumentFragment();

meses.forEach((el) => {
 const $li3 = document.createElement("li");
 $li3.textContent = el;
 $fragment.appendChild($li3);
});

document.write("<h3> MESES DEL AÑO </h3>")

$ul3.appendChild($fragment)
document.body.appendChild($ul3)
*/

//---------------TEMPLATES---------------------

// no se renderiza en el dom pero si se vé representada
// fue creada para ser un modelo a seguir (como una "clase") para generar
// estructuras dinamicamente ("objetos")

/*
const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title : "Tecnología",
      img : "https://placeimg.com/200/200/tech"
    },
    {
      title : "Animales",
      img : "https://placeimg.com/200/200/animals"
    },
    {
      title : "Arquitectura",
      img : "https://placeimg.com/200/200/arch"
    },
    {
      title : "Gente",
      img : "https://placeimg.com/200/200/people"
    },
    {
      title : "Naturaleza",
      img : "https://placeimg.com/200/200/nature"
    }
  ]

  cardContent.forEach(elemento => {
    $template.querySelector("img").setAttribute("src",elemento.img);
    $template.querySelector("img").setAttribute("alt",elemento.title);
    $template.querySelector("figcaption").textContent = elemento.title;
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

  })

  $cards.appendChild($fragment);

*/

// ----- modificando elementos (old style) ------------

/*
const $cards = document.querySelector('.cards'),
  $newCard = document.createElement('figure'),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src = "https://placeimg.com/200/200/any" alt="Any">
  <figcaption> Any </figcaption>
`;

$newCard.classList.add("card")


//$cards.replaceChild($newCard, $cards.children[2])
//$cards.removeChild($cards.lastElementChild)
//$cards.insertBefore($newCard,  $cards.firstElementChild)
//$cards.appendChild($cloneCards)
//document.body.appendChild($cloneCards)

*/

//--------- MODIFICANDO ELEMENTOS (COOL STYLE)-----------

/*
MÉTODOS

  .insertAdjacent...
  .insertAdjacentElement(position,element)
  .insertAdjacentHTML(position,html)
  .insertAdjacentText(position,text)

  Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforend(ultimo hijo)
    afterend(hermano siguiente)


 const $cards = document.querySelector('.cards'),
 $newCard = document.createElement('figure');

//$newCard.innerHTML = `
// <img src = "https://placeimg.com/200/200/any" alt="Any">
// <figcaption> Any </figcaption>
//`;

let $contentCard = `
<img src = "https://placeimg.com/200/200/any" alt="Any">
 <figcaption></figcaption>
` ;


$newCard.classList.add("card")

$newCard.insertAdjacentHTML("afterbegin",$contentCard)

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")


//----INSERTA EL ELEMENTO ANTES DEL ELEMENTO $cards
//$cards.insertAdjacentHTML("beforebegin",$newCard.outerHTML)
$cards.before($newCard)

//----INSERTA EL ELEMENTO DESPUES DEL PRIMER HIJO DEL ELEMENTO $cards
//$cards.insertAdjacentElement("afterbegin",$newCard)
$cards.prepend($newCard)

//----INSERTA EL ELEMENTO DESPUES DEL ULTIMO HIJO DEL ELEMENTO $cards
//$cards.insertAdjacentHTML("beforeend",$newCard.outerHTML)
$cards.append($newCard)

//----INSERTA EL ELEMENTO DESPUES DEL  ELEMENTO $cards
//$cards.insertAdjacentHTML("afterend",$newCard.outerHTML)
$cards.after($newCard)

*/

//---------- MANEJO DE EVENTOS -----------------

/*
Las funciones que se ejecutan en un evento se les llaman "event handler"
o manejadores de eventos. Le dan funcionalidad a los eventos.
*/

//---- Eventos semanticos -------

const holaMundo = () => {
  alert("Hola mundo");
  console.log(event);
};

const saludar = (nombre = "Desconocidx") => {
  alert(`Hola ${nombre}`);
  console.log(event);
};

const $eventoSemantico = document.getElementById("evento-semantico");

//$eventoSemantico.onclick = holaMundo(); devuelve undefined y se ejecuta automaticamente

// se llama sin paréntesis. Si se ponen los paréntesis, se ejecuta automaticamente
//por cada evento semantico se le puede asignar tan solo una funcion

$eventoSemantico.onclick = holaMundo;

/*
A la hora de asignar una nueva funcion, es reemplazada por la anterior.
El parametro al que se le pasa al metodo, es SIEMPRE el event y puede ser cualquier nombre
Se usa comunmente la "e" para representar "event"
*/
$eventoSemantico.onclick = (e) => {
  alert("Otra funcion");
  console.log(e);
};

//---- Eventos multiples -------

/*
A los eventos multiples se les pueden asignar distintas funciones y NO se van a pisar
entre ellas.
*/

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de eventos multiples");
  console.log(e);
  console.log(e.target);
  console.log(e.type);
});

//-------Eventos con parametros y remover eventos--------

/*
Para pasar parametros, se necesita el uso de la arrow function. En vez de pasar la funcion
sin parentesis como parametro ("click",saludar <esto pasa la referencia a la funcion>)
pasamos como parametro una arrow function que se encargue de llamar a cualquier funcion que querramos
("click", () => saludar() || "click", () => { cualquier funcion que querramos })
*/

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Horacito");
});

//---- remover eventos (se puede solo con multiples eventos)

/*
Para remover los eventos
se usa la funcion removeEventListener("el tipo de listener <p.e "dbclik">" , la funcion que deshabilita al evento)
Primero creamos la funcion que se encarga de eliminar el evento y luego la llamamos
como parametro de addEventListener("dblclick",removerDobleClick)
Esto hace que ejecute la alert y luego remueva este evento y lo deshabilite.
*/

const removerDobleClick = (e) => {
  alert(`Removiendo el evento del tipo ${e.type}`);
  $eventoRemovedor.removeEventListener("dblclick", removerDobleClick);
  $eventoRemovedor.disabled = true;
};

const $eventoRemovedor = document.getElementById("evento-remover");
$eventoRemovedor.addEventListener("dblclick", removerDobleClick);

//--- Flujo de eventos -------

/*
Los eventos se propagan desde el elemento más interno hasta el mas externo (window)
se le llama "burbuja" a este proceso ya que va del menor a mayor o -> O -> 0
*/

//const $divEventos = document.querySelectorAll(".eventos-flujo div");

//console.log($divEventos)

//function flujoEventos (e)  {
//  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`)
//
//  e.stopPropagation()
//}

//$divEventos.forEach(div => {

//proceso de burbuja (menor a mayor)
//div.addEventListener("click",flujoEventos,false)

//proceso de captura (mayor a menor siempre)
//div.addEventListener("click",flujoEventos,true)

/*
addEventListener acepta como tercer parametro un objeto con las propiedades
capture : true si queremos que vaya de mayor a menor siempre o false (burbuja) lo contrario
once : true si queremos que se ejecute tan solo una vez o falso (x defecto) para que ejecute siempre el evento
*/

//div.addEventListener("click",flujoEventos,{
//  capture: false,
//  once:true,
//});

//Burbuja
//  div.addEventListener("click",flujoEventos);

//})

// -------- stopPropagation y preventDefault ---------------

/*
La funcion stop propagation hace que el efecto burbuja se corta, es decir,
a la hora de accionar el evento, este se va a activar solamente en el elemento
al que accionamos
*/

// function flujoEventos (e)  {
//   console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`)

//   e.stopPropagation()
// }

/*
Prevent default cancela la accion que tenga por default el elemento
(en este caso a href="pagina" previene que vaya a dicha url)
*/

// const $linkEventos = document.querySelector("div a")

// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola soy tu amigo y docente digital Jonatan Mircha")
//   e.preventDefault()
//   e.stopPropagation()
//Como el link esta dentro del div numero 3, stop propagation evita
//que se propage dichos eventos del padre y se queda unicamente en el elemento
//que fue accionado
// })

//-----------Delegacion de eventos----------

/*
Consiste en delegar un evento a un elemento padre superior y desde ahi buscar quién
origino el evento sobre dicho elemento y llamar a la funcion encargada de manejar dicho evento.
Nos ahorra tener que recorrer cada elemento, en vez de eso, nos preocupamos de que elemento está siendo accionado
y llamar ala funcion manejadora de dicho.
Evitamos el uso de stopPropagation.
Utilizamos un solo listener que va a estar pegado al document.
*/

function flujoEventos(e, elemento) {
  console.log(
    `Hola te saluda ${elemento.className}, el click lo originó ${e.target.className}`
  );

  e.stopPropagation();
}

/*
Asignamos el eventListener a todo el documento y con un condicional verificamos donde
se esta ejecutando el evento click y a partir de ahí ejecutamos la funcion que querramos
*/

/*
Con esta tecnina, aparte de mejorar el rendimiento, solamente estamos teniendo una sola
asignacion al evento "click".
*/

document.addEventListener("click", (e) => {

  console.log("Diste click en: ", e.target);
  //matches("selector") returna booleano

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e, e.target)
  }

  if (e.target.matches(".eventos-flujo a"))
    alert("Hola soy tu amigo y docente digital Jonatan Mircha");
  e.preventDefault();
});


//---------------BOM-------------------


const $bom = document.createElement("h3")
$bom.textContent = "El BOM -> Browser Object Model"

$whatIsDOM.after($bom)

//El metodo resize se acciona cada vez que cambia el tamaño del viewport
//console.clear() limpia la consola 

// window.addEventListener("resize", (e) => {
//   console.clear()
//   console.log("------ EVENTO RESIZE---------")
//   //Ancho interior - viewport
//   console.log(`Ancho interior ${window.innerWidth}`)
//   //Alto interior - viewport
//   console.log(`Alto interior ${window.innerHeight}`)
//   //Ancho exterior - toda la pantalla
//   console.log(`Alto exterior ${window.outerHeight}`)
//   //Ancho exterior - toda la pantalla
//   console.log(`Ancho exterior ${window.outerWidth}`)
// });

// window.addEventListener("scroll", (e) => {
//   console.clear()
//   console.log("-----SCROLL-----")
//   console.log(`Scroll X ${window.scrollX} `)
//   console.log(`Scroll Y ${window.scrollY} `)
//   console.log(e)
// });

// //El evento "load" se ejecuta cuando se abre por primera vez la pantalla 

// window.addEventListener("load", e => {
//   console.log("-------EVENTO LOAD-------")
//   console.log(`Screen X ${window.screenX}`)
//   console.log(`Screen Y ${window.screenY}`)
//   console.log(e)
// })

/*
cuando llamamos el evento DOMContentLoaded sobre el document
lo hace de manera mas rapida y eficaz.

La diferencia entre "load" y "DOMContentLoaded" es que la primera espera que se carguen todos los elementos
html (incluyendo estilos, scripts, imagenes, etc) mientras que la segunda solo espera que cargue el contenido HTML
sin tener encuenta los estilos, scripts, imagenes etc.
Cuando consumimos api's es mejor usar la segunda opcion ya que vamos a querer que se carguen
los datos de dicha api de manera rapida, en vez de esperar que toda la pagina cargue y recien
ahi realizar la carga.
*/


// document.addEventListener("DOMContentLoaded", e => {
//   console.log("-----EVENTO DOMcontentLoaded-----")
//   console.log(`Scroll X ${window.scrollX} `)
//   console.log(`Scroll Y ${window.scrollY} `)
//   console.log(e)
// })





//-------BOM METODOS------------

/*
window.METODO o llamar al metodo directamente ya que window es el objeto tásito
*/

//alert("Hola")
//confirm("Que tal")
//prompt("Ingrese algo")

// const $abrirVentana = document.querySelector("#abrir-ventana"),
//   $cerrarVentana = document.querySelector("#cerrar-ventana"),
//   $imprimirVentana = document.querySelector("#imprimir-ventana")

// let ventana;

// $abrirVentana.addEventListener("click", e => {
//   ventana = window.open("https://jonmircha.com");
// });
// $cerrarVentana.addEventListener("click", e => {
//   ventana.close();
// })
// $imprimirVentana.addEventListener("click", e => {
//   window.print()
// })


//-------OJETOS URL HISTORIAL NAVEGADOR-----


console.log("---------OBJETO URL--------")
//console.log(location)

// console.log("Origen (donde se almacena la URL): " + location.origin)
// console.log("Protocolo: " + location.protocol)
// console.log("Host: " + location.host)
// console.log("Host name : " + location.hostname)
// console.log("Puerto: " + location.port)
// console.log("Url completa: " + location.href)
// console.log("Search: (despues del ?): " + location.search)
// console.log("HASH: " + location.hash)
// console.log("Path name (/.../...): " + location.pathname)

// console.log(window.history)
// console.log(window.history.length)

//console.log(navigator)

console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.mimeTypes)
console.log(navigator.onLine)
console.log(navigator.serviceWorker)
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent)