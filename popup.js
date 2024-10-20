const btn = document.querySelector("#btn1")
const text = document.querySelector("#responseText")

btn.addEventListener("click",()=>{
    text.textContent = "Button Clicked!"
})