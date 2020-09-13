
async function createData (){
  const $fetchasync = document.getElementById("async-fetch"),
  $fragment = document.createDocumentFragment();

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users"),
    json = await response.json();
    
    if(!response.ok) throw {status: response.status, statusText : response.statusText}
    
    json.forEach(el => {
      const $li = document.createElement("li");
      $li.innerHTML = `<b>Nombre:</b> ${el.name} ---- <b>Email:</b> ${el.email} ---- <b>Empresa:</b> ${el.company.name}`;
      $fragment.append($li);
    })
    $fetchasync.appendChild($fragment)
  } 
  catch (error) {
    let message = error.statusText || "Ocurrió un error";
    $fetchasync.innerHTML = `<b>${message} ${error.status}</b>`;
    alert(`${message} ${error.status}`);
  } 
}
createData()