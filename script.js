let bar = document.querySelector('#bar')
let navbar = document.querySelector('#navbar')
let cancel = document.querySelector('#cancel')

bar.addEventListener("click",()=>{
  navbar.classList.toggle('active')
})

cancel.addEventListener('click',()=>{
  navbar.classList.remove('active')
})




