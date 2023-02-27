let adviceDiv = document.querySelector(".adviceDiv");
let h1 = document.querySelector("h1");
let circleDiv = document.querySelector(".circleDiv");





axios.get("https://api.adviceslip.com/advice").then(function (response) {

    let edvice = response.data.slip.advice;
    let id = response.data.slip.id;
    h1.innerText = "ADVICE #" + id;
    adviceDiv.innerText = '"' + edvice + '"';


});

circleDiv.addEventListener("click", function() {
   
        location.reload();

    



})






