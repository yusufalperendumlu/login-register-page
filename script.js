const login = document.querySelector(".Login");
const register = document.querySelector(".Register");
const reg = document.querySelector(".register");
const log = document.querySelector(".login");

login.addEventListener("click" , () => {
    log.style.transform="translateX(-350px)";
    reg.style.transform="translateX(-400px)";

})

register.addEventListener("click", () => {
    reg.style.transform="translateX(5px)";
    log.style.transform="translateX(100px)";
    
})


const btn = document.querySelector(".sgnup");
const inpt = document.querySelectorAll("#input1");

inpt.addEventListener('keypress' , handleInputChange);

const saveToLocalStorage = () => {
    if(inpt.value) {
        localStorage.setItem('input1' , inpt.value);
    }
}

const getFromLocalStorage = () => {
    inpt.value=localStorage.getItem('input1');
} 

btn.addEventListener("click" , () => {
    saveToLocalStorage();
});

getFromLocalStorage();

function handleInputChange(){
    saveToLocalStorage();
}