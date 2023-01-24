function ddTestApp() {
  if (window.location.hostname.indexOf('jenuine-creative') > -1) {
     var newDiv = document.createElement("div");
     var newP = document.createElement("p");
     newDiv.id = "invoiceproof";
     newP.id = "timeleft";
     newDiv.appendChild(newP); 
     document.body.appendChild(newDiv);
     var invoiceProof = document.querySelector("#invoiceproof").style;
     invoiceProof.position = "fixed";
     invoiceProof.top = "0";
     invoiceProof.bottom = "0";
     invoiceProof.right = "0";
     invoiceProof.left = "0";
     invoiceProof.zIndex = "999999999";
     invoiceProof.backgroundColor = "white";
     invoiceProof.height = "100vh";
     invoiceProof.width = "100vw";
     invoiceProof.display = "flex";
     invoiceProof.justifyContent = "center";
     invoiceProof.alignItems = "center";
     invoiceProof.opacity = "0";
    var countDownDate = new Date("Feb 29, 2023 23:59:59").getTime();
    var x = setInterval(function() {

      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var timeLeft = "This site will be deactivated in " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      document.querySelector("#timeleft").innerHTML = timeLeft;
        if (days > 6) {
          invoiceProof.opacity = "0.2";
        }
        if (days == 5) {
          invoiceProof.opacity = "0.3";
        }
        if (days == 4) {
          invoiceProof.opacity = "0.4";
        }
        if (days == 3) {
          invoiceProof.opacity = "0.6";
        }
        if (days == 2) {
       invoiceProof.opacity = "0.8";
       window.onscroll = () => { window.scroll(0, 0); };
       document.body.style.overflow = "hidden";
       }
        if (days == 1) {
       invoiceProof.opacity = "1";
       window.onscroll = () => { window.scroll(0, 0); };
       document.body.style.overflow = "hidden";
        }
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
        

    }, 1000);  
  }
}

ddTestApp();
