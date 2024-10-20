const btn = document.querySelector("#btn1")
const text = document.querySelector("#responseText")

let clickCount = 0;
// Using Chrome's local storage

chrome.storage.local.get(['clickCount'],(result)=>{

    if(result.clickCount){
        clickCount = result.clickCount
    }
    text.textContent = `Hello World ${clickCount}`

})


btn.addEventListener("click",()=>{
    clickCount++
    text.textContent = `Hello World ${clickCount}`
})

chrome.storage.local.set({clickCount:clickCount},()=>{
    console.log("Successfully saved!");
    
})