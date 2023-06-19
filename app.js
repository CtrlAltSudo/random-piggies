const img = document.querySelector("img");
const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
       let randomNumber = Math.floor(Math.random() * 18) + 1;
        img.src = `./images/${randomNumber}.jpeg`;
    console.log("img")
});



