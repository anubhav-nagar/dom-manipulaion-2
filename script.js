const win = document.querySelector('.window');
const openBtn = document.querySelector('#btn-container');
const closeBtn = document.querySelector('#close-btn');


openBtn.addEventListener("click", function(){
    document.querySelector(".window").classList.add("show-window");
})

closeBtn.addEventListener("click", function(){
    document.querySelector(".window").classList.remove("show-window");
    console.log("removed");
})