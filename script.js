document.getElementById("main-button").addEventListener("click", () => { 
   const text = document.getElementById("main-text")
        if (text.style.color === "green") {
            text.style.color = "red";
        } else {
            text.style.color = "green";
        }})
