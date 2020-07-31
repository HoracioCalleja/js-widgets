const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id){
  const $id = d.getElementById(id),
   isMobile = {
     android : () => ua.match(/android/i),
     ios : () => ua.match(/iphone|ipad|ipod/i),
     windows : () => ua.match(/windows phome/i),
     any : function () {
       return this.android() || this.ios() || this.windows();
     }  
   },
   isDesktop = {
    linux : () => ua.match(/linux/i),
    mac : () => ua.match(/mac os/i),
    windows : () => ua.match(/windows nt/i),
    any : function () {
      return this.linux() || this.mac() || this.windows();
    }
   },
   isBrowser = {
    chrome : () => ua.match(/chrome/i),
    safari : () => ua.match(/safari/i),
    edge : () => ua.match(/edge/i),
    firefox : () => ua.match(/firefox/i),
    opera : () => ua.match(/opera|opera mini/i),
    ie : () => ua.match(/msie|iemobile/i),
    any : function () {
      return this.firefox() || this.edge() || this.chrome()||this.opera() || this.ie() || this.safari();
    }
   };

   $id.innerHTML = `
   <ul>
   <li><b>${ua}</b></li> 
   <br>
   <li>
      Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b>
    </li>
    <br>
    <li>
      Browser: <b>${isBrowser.any()}</b>
    </li>
    
   </ul>
   `

  //  if(isMobile.android()){
  //    window.location.href = "https://google.com/"
  //  }
  //  if(isMobile.ios()){
  //   window.location.href = "https://apple.com/"
  // }

}