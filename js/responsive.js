const d = document,
  w = window;

export default function responsiveMedia (elementID,mediaQuery,mobileContent, desktopContent) {

  //MATCH MEDIA RECIBE UNA MEDIA QUERY Y DEVUELVE UN OBJETO MediaQueryList
  //CON EL QUE SE PUEDE AGREGAR listeners Y FUNCIONES
  let breakPoint = w.matchMedia(mediaQuery);
  
  
  //FUNCION RESPONSIVA 
  const responsive = (e) => {
    
    //SI LA VENTANA TIENE 1240 PX O MAS...
    if(e.matches){
      d.getElementById(elementID).innerHTML = desktopContent;
    //SI LA VENTANA MENOS DE 1240...
    } else {
      d.getElementById(elementID).innerHTML = mobileContent;
    }
    //console.log(e)
    //console.log("MediaQuery", mediaQuery,e.matches)
  }

  //El objeto MediaQueryList recibe como listener una funcion (responsive(e))
  //que se encarga de cambiar el contenido de el html según el tamaño de 
  //la media query anteriormente almacenada con la funcion matches

  breakPoint.addListener(responsive);
  responsive(breakPoint)
}

