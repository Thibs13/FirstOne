const margit = document.getElementById('margit');
const margit2 = document.querySelector('.margit2');
const godrick = document.getElementById('godrick');
const godrick2 = document.querySelector('.godrick2');
const redwolf = document.getElementById('redwolf');
const redwolf2 = document.querySelector('.redwolf2');
const rennala = document.getElementById('rennala');
const rennala2 = document.querySelector('.rennala2');
margit.addEventListener("click",()=>{
    margit2.classList.toggle("inv")
})
godrick.addEventListener("click",()=>{
    godrick2.classList.toggle("inv")
})
redwolf.addEventListener("click",()=>{
    redwolf2.classList.toggle("inv")
})
rennala.addEventListener("click",()=>{
    rennala2.classList.toggle("inv")
})
