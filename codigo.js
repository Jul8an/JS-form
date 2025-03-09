const frontA = document.getElementById("front-A")
const backA = document.getElementById("back-A")
const formFront = document.querySelector(".form__front")
const formBack = document.querySelector(".form__back")

frontA.addEventListener("click", ()=>{
    formFront.classList.add("turn-around")
    formBack.classList.add("turn-back")
})

backA.addEventListener("click", ()=>{
    formFront.classList.remove("turn-around")
    formBack.classList.remove("turn-back")
})

