'use strict'

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelector("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]");
menuToggleBtn.addEventListener("click",function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});
for (let index = 0; index < navbarLinks.length; index++) {
    navbarLinks[index].addEventListener("click",function (){
        menuToggleBtn.classList.toggle("active");
    })
    
}
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function (){
    if(this.window.scrollY >= 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active")
    }
})
// const topspy= document.getElementById("topspy");
// window.addEventListener("scroll", function (){
//     if(this.window.scrollY >= 100){
//         topspy.classList.add("active");
//     }else{
//         topspy.classList.remove("active")
//     }
// })

let Speciality = [
{food:"AppIMG/images_(p1).jpg",name:"Pizza",icon:"AppIMG/pizza-icon.png",NB:"What do you think about cheese Pizza Reception"}
,{food:"AppIMG/IMG_9421-1_1.jpeg",name:"Semo with lemon-Soup",icon:"AppIMG/pie-icon.png",NB:"Today good mood is sponsored by healty-food"}
,{food:"AppIMG/IMG_271.jpeg",name:"Noodles",icon:"AppIMG/pie-icon.png",NB:"Today good mood is sponsored by healty-food"}

,{food:"AppIMG/images (b2).jpg",name:"Tasty Burger",icon:"AppIMG/burger-icon.png",NB:"Give your burger a good pickle to make it laugh."}
,{food:"AppIMG/ice-cream(1).jpg",name:"Ice-cream",icon:"AppIMG/ice-cream-icon.png",NB:"Whit ice-cream everything is popsicle"}
,{food:"AppIMG/cold driks(2).webp",name:"Cold-drinks",icon:"AppIMG/cold-drink-icon.png",NB:"Partners in Wine🎇🍷, cold ❄️🧊 like me!"}
,{food:"AppIMG/tasty-sweets(1).jpg",name:"Sweet-Sweets",icon:"AppIMG/pie-icon.png",NB:"Life is better with friends and Tasty-Sweets"}
,{food:"AppIMG/healty-food(1).jpg",name:"Healty-food",icon:"AppIMG/tea-icon.png",NB:"Today good mood is sponsored by healty-food"}
,{food:"AppIMG/IMG_271.jpeg",name:"Noodles",icon:"AppIMG/tea-icon.png",NB:"Today good mood is sponsored by healty-food"}
,{food:"AppIMG/IMG_589.jpeg",name:"Beans-Cake",icon:"AppIMG/tea-icon.png",NB:"Beans-Cake healty-food,for the Week end"}
,{food:"AppIMG/IMG_9421-1_1.jpeg",name:"Semo with lemon-Soup",icon:"AppIMG/pie-icon.png",NB:"Today good mood is sponsored by healty-food"}
,{food:"AppIMG/IMG_20201213_133910_329.jpg",name:"Beans & Plantain",icon:"AppIMG/tea-icon.png",NB:"Today good mood is sponsored by healty-food"}
,{food:"AppIMG/IMG_271.jpeg",name:"Noodles",icon:"AppIMG/tea-icon.png",NB:"Today good mood is sponsored by healty-food"}
,{food:"AppIMG/IMG-20220518-WA0016_2.jpg",name:"Pasta",icon:"AppIMG/tea-icon.png",NB:"Today good mood is sponsored by healty-food"}
,{food:"AppIMG/IMG_20211125_183955.jpg",name:"Yam with Egg",icon:"AppIMG/tea-icon.png",NB:"Today good mood is sponsored by healty-food"}
,{food:"AppIMG/IMG_7441.jpeg",name:"Rosted Fish",icon:"AppIMG/burger-icon.png",NB:"Today good mood is sponsored by healty-food"}
]
let Porpular = [{food:"AppIMG/images (b2).jpg",name:"Tasty-Burger",price:"1999.00",}
,{food:"AppIMG/images_(p1).jpg",name:"Pizza",price:"4950.00",}
,{food:"AppIMG/ice-cream(1).jpg",name:"ice-cream",price:"259.00",}
,{food:"AppIMG/IMG_20201127_111113_315.jpg",name:"Eba",price:"2050.00",}

,{food:"AppIMG/cold driks(2).webp",name:"Cold-Drinks",price:"200.00",}
,{food:"AppIMG/snacks(1).jpg",name:"Snacks",price:"1300.00",}
,{food:"AppIMG/IMG_9421-1_1.jpeg",name:"Semo&lemon-Soup",price:"2590.00",}

,{food:"AppIMG/images (1).jpg",name:"Tasty-Burger",price:"900.00",}
,{food:"AppIMG/IMG_271.jpeg",name:"Noodles",price:"1499.00",}
,{food:"AppIMG/IMG_589.jpeg",name:"Beans Cake",price:"1000.00",}
,{food:"AppIMG/IMG_6152.jpeg",name:"Plantain & Egg",price:"1050.00",}
,{food:"AppIMG/IMG-20220518-WA0016_2.jpg",name:"pasta",price:"1899.00",}


]
let Menu = [{food:"AppIMG/images (p2).jpg",price:"3,999",name:"Pizza"}
,{food:"AppIMG/IMG_20210420_225624.jpg",name:"Rice and Ckicken",price:"1499.00",}

,{food:"AppIMG/images (tasty2).jpg",name:"cup-cake",price:"1000.00"}
,{food:"AppIMG/IMG_271.jpeg",name:"Noodles",price:"1499.00",}
,{food:"AppIMG/images (b2).jpg",name:"Tasty-Burger",price:"1000.00"}
,{food:"AppIMG/IMG_20201127_111113_315.jpg",name:"Eba",price:"1499.00",}

,{food:"AppIMG/images (ice2).jpg",name:"ice-cream",price:"259.00"}
,{food:"AppIMG/images (1).jpg",name:"Tasty-Burger",price:"1000.00",}
,{food:"AppIMG/snacks(1).jpg",price:"1,300.00",name:"Snacks"}
,{food:"AppIMG/IMG_586.jpeg",name:"Beans Cake with Break",price:"1,499.00",}
,{food:"AppIMG/IMG_6152.jpeg",name:"Plantain & Egg",price:"1499.00",}
,{food:"AppIMG/IMG_9421-1_1.jpeg",name:"Semo with lemon-Soup",price:"1499.00",}
,{food:"AppIMG/IMG_20201213_133910_329.jpg",name:"Beans & Plantain",price:"1499.00",}
,{food:"AppIMG/IMG_5649.jpeg",name:"Noodles",price:"1499.00",}
,{food:"AppIMG/IMG-20220518-WA0016_2.jpg",name:"pasta",price:"1499.00",}
,{food:"AppIMG/IMG_20210320_193953_495.jpg",name:"Semo with Lemon Soup",price:"1499.00",}

]
let spelength = 8;
let Porlength = 8;
let Menlength = 8;
    let getusers =  JSON.parse(localStorage.getItem("Users"));
    let newfood = JSON.parse(localStorage.getItem("addtolist"));
    // if (newme != null) {
    //     newfood = newme
    // }
window.addEventListener('load', () => {  
    console.log(ade)
    console.log(newfood)
})
function specialty(you){
    for (let index = 0; index < you; index++) {    
        document.getElementById("me").innerHTML+=
        `
        <div class="box">
            <img class="image" src="${Speciality[index].food}" alt="">
            <div class="content h-100">
                <img src="${Speciality[index].icon}" width="60px" height="60px" alt="">
                <h3>${Speciality[index].name}</h3>
                <p>${Speciality[index].NB}</p>
            </div>
        </div>
    `
    
    }
}
specialty(spelength)
let color = "red"

function firstmore(event) {
  let element = event.target;
//   let element = document.getElementById("more");

    document.getElementById("me").innerHTML = ""
    
  if (element.innerHTML == "more"){
      spelength = 16
    specialty(spelength)

      element.innerHTML ="less"
    
  }
  else{
      spelength = 8;
    specialty(spelength)

      element.innerHTML = "more"

  }
        
}

function porpular(and){
    for (let index = 0; index < and; index++) {
        document.getElementById("porpular-items").innerHTML+=`
        <div id="ad${index}" class="box card">
            <div class="card-img">
                <img  src="${Porpular[index].food}" alt="">
                <span class="${Porpular[index].price} card-img-overlay price"><strike>N</strike>
                ${Porpular[index].price}</span>
            </div>
            <h3>${Porpular[index].name}</h3>
            <div class="stars pb-2">⭐⭐⭐⭐
                
            </div>
            <a href="#porpular-items" onclick="firstorder(${index})" class="btn btns btn-warning text-light fw-bold btn-hover"> Order now</a>

    </div>
        `
    }
}
porpular(Porlength)
function secondmore(event) {
    document.getElementById("porpular-items").innerHTML = ""
    let element = event.target;
  if (element.innerHTML == "more"){
      Porlength = 12,
    porpular(Porlength)

      element.innerHTML ="less"
    //   Porlength = 6
  }else{
      Porlength = 8;
    porpular(Porlength)

      element.innerHTML = "more"

  }
}
function menu(Me) {
for (let i = 0; i < Me; i++) {
    document.getElementById("menu-items").innerHTML+=
    `
    <div id="ad${i}" class="box card">
                <img  src="${Menu[i].food}" alt="">
                <div class="content w-100">
                    <h3>${Menu[i].name}</h3>
                    <h3><strike>N</strike>
                    ${Menu[i].price}</h3>
                    <a href="#ad${i}" onclick="secondorder(${i})" class="btn btns btn-warning text-light fw-bold btn-hover">order now</a>
                </div>
    </div>
    `
}
}
menu(Menlength)
Menu = [...Menu,...newfood]

function thirdmore(event) {
    document.getElementById("menu-items").innerHTML = ""
let element = event.target;
  if (element.innerHTML == "more"){
      Menlength = Menu.length;
      
menu(Menlength)

      element.innerHTML ="less"
    //   Menlength = 
  }else{
      Menlength = 8;
menu(Menlength)
      element.innerHTML = "more"

  }
}
let b = document.getElementById("cartNo").innerHTML 

let newarray = []
    let ade = JSON.parse(localStorage.getItem("restaurant"));
    if (ade != null) {
        newarray = ade
    }
function firstorder(param){
    b = newarray.length
    b++
    document.getElementById("cartNo").innerHTML = b
    newarray.push(Porpular[param])
    localStorage.setItem("restaurant", JSON.stringify(newarray))
    
}
function secondorder(para){
    b = newarray.length
    b++
    document.getElementById("cartNo").innerHTML = b
    newarray.push(Menu[para])
    localStorage.setItem("restaurant", JSON.stringify(newarray))

}

document.getElementById("cartNo").innerHTML = newarray.length
let getuser = JSON.parse(localStorage.getItem("currentuser"));
console.log(getuser);
document.getElementById("username").innerHTML = getuser.username;

let getadmin = JSON.parse(localStorage.getItem("currentadmin"));
console.log(getadmin);
console.log(getadmin.username);
document.getElementById("adminname").innerHTML = getadmin.username;
async function previewImg() {
    const file = document.getElementById('file').files[0];
    const image = document.getElementById('img');
    // const image2 = document.getElementById('img2');
    try {
        let data = await preview(file);
        image.src = data
        console.log(data)

    } catch (error) {
        console.log("oppes error happened")
    }
}
function preview(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result);
        }
        reader.onerror = (err) => {
            reject(err)
        }
    })
}

function previewImg() {
        const file = document.getElementById('file').files[0];
        const image2 = document.getElementById('img2');
        const reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onload = () => {
            image2.src = reader.result
        }
        reader.onerror = (err) => {
            console.log(err)
        }
    }
    // add to MenU//
    function previewImg() {
        const file = document.getElementById('file').files[0];
        const preview = document.getElementById('preview');
        const reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onload = () => {
            preview.src = reader.result
        }
        reader.onerror = (err) => {
            console.log(err)
        }
    }
// ADD TO LIST
let newMenu = []
const newimg = document.getElementById("preview");
const newfoodname = document.getElementById("Food-name");
const newfoodprice = document.getElementById("Food-price");
function addtolist(){
    newMenu.push({
        food: newimg.src, 
        price: newfoodname.value, 
        name: newfoodprice.value, 
        
    });
    localStorage.setItem("addtolist", JSON.stringify(newMenu))

}

function addreview(){
    const newimg = document.getElementById("preview");
    const newusersname = document.getElementById("username");
    const newcomment = document.getElementById("comment");
    document.getElementById("box-container").innerHTML+=
    `
    <div class="box card">
                    <img  src="${newimg.src}"  alt="">
                    <div class="content">
                        <h3>${newusersname.value}</h3>
                        <div class="stars">⭐⭐⭐</div>
                        <p>${newcomment.value}</p>
                    </div>
                </div>
    `
}