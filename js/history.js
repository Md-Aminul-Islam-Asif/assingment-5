
const btnDonation = document.getElementById("donation");
const history =document.getElementById("history");

btnDonation.addEventListener("click",function(){
document.getElementById("cards").classList.remove("hidden");
document.getElementById("history-container").classList.add("hidden");
document.getElementById("footer").classList.remove("hidden");
history.classList.remove("bg-neutral-300");
btnDonation.classList.add("bg-neutral-300");
});

history.addEventListener("click",function(){
      document.getElementById("cards").classList.add("hidden");
      document.getElementById("history-container").classList.remove("hidden");
      document.getElementById("footer").classList.add("hidden");
      btnDonation.classList.remove("bg-neutral-300");
      history.classList.add("bg-neutral-300");

});


