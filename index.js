const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",(e)=>{
    document.body.style.background = randomBg();
});
function randomBg() {
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`
}
