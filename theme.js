
function ddTestApp() {
  if (window.location.hostname == 'dd-test-app-store.myshopify.com') {
    var countDownDate = new Date("Jan 1, 2024 23:59:59").getTime();
     var x = setInterval(function() {
      var now = new Date().getTime();
       var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           var seconds = Math.floor((distance % (1000 * 60)) / 1000);

       var div = document.createElement("div");
        div.id = "invoiceproof";
        var p = document.createElement("p");
        p.classList += 'album';
        p.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        div.appendChild(p); 
        document.body.appendChild(div);

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);  
  }
}

