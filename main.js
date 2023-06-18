const sectionTickets = document.getElementById("buy-tickets");
const toBuy = document.querySelectorAll("a[href='#buy-tickets']");
let hr = document.createElement('hr');

const openBuy = function () {
   sectionTickets.classList.remove("d-none");
   sectionTickets.before(hr);
};

toBuy.forEach( link => {link.addEventListener("click", openBuy)});

// store url on load
let currentPage = location.href;

let estoyEnBuyTickets = currentPage.indexOf("buy-tickets") > -1;
if (estoyEnBuyTickets) {
   openBuy();
}

// listen for changes
setInterval(function() {
   if (currentPage != location.href) {
      currentPage = location.href;
      let estoyEnBuyTickets = currentPage.indexOf("buy-tickets") > -1;
      if (estoyEnBuyTickets) {
         openBuy();
      } else {
         sectionTickets.classList.add("d-none");
         let hr = document.getElementsByTagName("HR")[0];
         if (typeof hr !== 'undefined') {hr.remove();}
      }
   }
}, 100);

function getTotal() {
   let op = document.getElementById("inputCategoria").selectedIndex;
   let cantidad = document.getElementById("inputCantidad").value;
   let total = cantidad * 200;
   let totalMostrar = document.getElementById("total");
   switch (op) {
      case 0:
         totalMostrar.innerText = total;
         break;
      case 1:
         total -= total * 0.8;
         totalMostrar.innerText = total;
         break;
      case 2:
         total -= total * 0.5;
         totalMostrar.innerText = total;
         break;
      case 3:
         total -= total * 0.15;
         totalMostrar.innerText = total;
         break;
      default:
         totalMostrar.innerText = 0;
         break;
   }
}

function borrar() {
   document.getElementById("total").innerText = 0;
}
/*
// Hide if it's not on display
let callback = (entries) => {
   console.log("1");
   if (!estoyEnBuyTickets) {
      console.log("2");
      entries.forEach(entry => {
         console.log("3");
         if (!entry.isIntersecting) {
            console.log("4");
            sectionTickets.classList.add("d-none");
         }
         //entry.target.style.backgroundColor = entry.isIntersecting ? 'green' : 'red';
      })
   }
}
let observer = new IntersectionObserver(callback, {
   threshold: [0.1] // If 10% of the element is in the screen, we count it!
   // Can change the thresholds based on your needs. The default is 0 - it'll run only when the element first comes into view
});

if (sectionTickets) observer.observe(sectionTickets);*/