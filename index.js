
let sidbar = document.querySelector(".sidebar")
let sectionsLink = document.querySelector(".sidebar ul")
let socialElement  =  document.querySelector(".social-icons")
let openClose  =  document.querySelector(".open-close")

openClose.addEventListener("click", ()=>{
sidbar.classList.toggle("open");
})


const items=[
  {
  title:"Home",
  url:"/",
  icon:'  <i class="fa-solid fa-house"></i>',
},
  {
  title:"Profile",
  url:"/",
  icon:'  <i class="fa-solid fa-house"></i>',
},
{
  title:" Setting",
  url:"/",
  icon:'<i class="fa-solid fa-gear"></i>',
},
{
  title:"About",
  url:"/",
  icon:'<i class="fa-solid fa-address-card"></i>',
},
{
  title:"Contact US",
  url:"/",
  icon:'<i class="fa-solid fa-address-book"></i>',
},
{
  title:"Sign Out",
  url:"/",
  icon:'<i class="fa-solid fa-right-from-bracket"></i>',
},
]
const SocialIcons=[
  {
  title:"FaceBook",
  url:"/",
  icon:'<i class="fa-brands fa-facebook"></i>'

},
{
  title:"Twitter",
  url:"/",
  icon:'<i class="fa-brands fa-twitter"></i>'
},
{
  title:"Insagram",
  url:"/",
  icon:'<i class="fa-brands fa-instagram"></i>'
},
]

items.forEach(item=>{
    sectionsLink.innerHTML+= `<li><a href="#"> ${item.icon} <span>${item.title}</span></a>`
})

SocialIcons.forEach(item=>{
    socialElement.innerHTML += `<a href="#">${item.icon}</a>`
})
