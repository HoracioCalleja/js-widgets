// (() => {
//   const xhr = new XMLHttpRequest(),
//     $xhr = document.getElementById("xhr"),
//     $fragment = document.createDocumentFragment();
//   /*
 
//   xhr.readyState = ...
//   0 -> unitialized
//   1 -> loading
//   2 -> loaded
//   3 -> interactive
//   4 -> complete
//   */

//   //readystatechange -> cuando haya habido un cambio en el state
//   xhr.addEventListener("readystatechange", (e) => {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log("Éxito");
//       let json = JSON.parse(xhr.responseText)
//       console.log(json)
//       json.forEach(el => {
//         const $li = document.createElement("li");
//         $li.innerHTML = `<b>Nombre:</b> ${el.name} ---- <b>Email:</b> ${el.email} ---- <b>Empresa:</b> ${el.company.name}`;
//         $fragment.append($li);
//       })
//       $xhr.appendChild($fragment);

//     } else {
//       console.log("Error");
//       let message = xhr.statusText || "Ocurrió un error";
//       $xhr.innerHTML = `Error ${xhr.status} : ${message}`;
//     }
//   });

//    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

//     xhr.send();

// })();

// (() => {
//   const $fetch = document.getElementById("fetch"),
//   $fragment = document.createDocumentFragment();

//   fetch("https://jsonplaceholder.typicode.com/users")

//   .then(res => res.ok ? res.json() : Promise.reject(res))
//   .then(json => {
//     json.forEach(el => {
//       const $li = document.createElement("li");
//       $li.innerHTML = `<b>Nombre:</b> ${el.name} ---- <b>Email:</b> ${el.email} ---- <b>Empresa:</b> ${el.company.name}`;
//       $fragment.append($li);
//     })
//     $fetch.appendChild($fragment);
//   })
//   .catch(error => {
//     let message = error.statusText || "Ocurrió un error";
//       $fetch.innerHTML = `Error ${error.status} : ${message}`;
//   })
// })()


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