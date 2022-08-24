let main3 = document.getElementById('photo')

    let photos = [//"T3uOfzAmZHq3aKZ46m7v6ZCuledBFtNEXZyf2uBl.jpg",
        "AppIMG/yelo-foodlp-bm1.webp",  "AppIMG/UzVHlLUHoKj0PXdQHrQE5y8I2ehG3qrWpIyliare.jpg", "AppIMG/T3uOfzAmZHq3aKZ46m7v6ZCuledBFtNEXZyf2uBl.jpg",]
    function photo() {
        photos.map((value, index) => {
            main3.innerHTML += `
        <main class="mt-2 w-50 d-flex" >                  
                        <div class="card w-100 d-flex"><img src="${value}" alt=""></div>
        </main>
        `

        })
    }
    photo()

    let b = document.getElementById("cartNo").innerHTML

    let ade = JSON.parse(localStorage.getItem("restaurant"));
    if (ade != null) {
        newarray = ade
        b = newarray.length

    }

    window.addEventListener('load', () => {
        let getuser = JSON.parse(localStorage.getItem("currentuser"));
        console.log(getuser);
        document.getElementById("username").innerHTML = getuser.username;
        

        console.log(newarray)
        display()

        document.getElementById("cartNo").innerHTML = newarray.length
        
    })
    b = ade.length
    function display() {
        Fnumber = ""
        console.log(ade)
        document.getElementById("cart").innerHTML = ""
        ade.map((value, index) => {
            document.getElementById("cart").innerHTML +=
                `
    <div class=" each-div  d-flex c id="mm${index}">
           <img class=" card m" style="height: 12rem; width: 11rem;" src="${value.food}">
           <div class="cart-box" >
                <div id="cart-content" class="" >
                        <h5 class="text-primary ">${value.name}</h5>
                        <h5 id="sub-price${index}" class="text-danger">${value.price}</h5>
                        <input onkeyup="ValuE(${index})" value="0" id="sub-qty${index}" type="number">
                </div> 
                <div class="navbar cart-content2">
                    <div>
                    <h5 class="text-primary ">Sub-total</h5>
                    <h5 id="sub-total${index}" class="text-primary ">0</h5>
                    </div>
                    <h5 id="remove" class="rounded-pill"> <button id="todomin" class=" btn fw-bolde fs-5 text-light p-1" onclick= "remove(${index})">🗑</button>   </h5>  
                </div>
            </div>
    </div>
        `
       
    })
        
    }
    let sum = 0

    function ValuE(param) {

        let you = document.getElementById(`sub-price${param}`).innerHTML
        let mult = document.getElementById(`sub-qty${param}`).value
        document.getElementById(`sub-total${param}`).innerHTML = Number(you) * Number(mult)
        sum += Number(document.getElementById(`sub-total${param}`).innerHTML)
        console.log(sum)
        document.getElementById('total').innerHTML = ` <strike>N</strike>${sum}`

    }
    function next(){
        
        document.getElementById('total22').innerHTML = ` <strike>N</strike>${sum}`
            
    }

    function remove(index) {

        b--
        document.getElementById("cartNo").innerHTML = b
        newarray.splice(index, 1)
        display()
        console.log(newarray)
        localStorage.setItem("restaurant", JSON.stringify(newarray));
        window.location.reload()

    }
    let getuser = JSON.parse(localStorage.getItem("currentuser"))
console.log(getuser)
document.getElementById("username").innerHTML = getuser.username 
document.getElementById("username4").innerHTML += getuser.username 




    let cart = JSON.parse(localStorage.getItem("restaurant"));
    if (cart != null) {
        newarray = cart
        b = newarray.length
        document.getElementById("cartNo").innerHTML = newarray.length

    }

    const email = document.getElementById("emailS");
    const password = document.getElementById("pwdS");
    const username = document.getElementById("username");
    const surname = document.getElementById("surname");
    const conpws = document.getElementById("confirmpwd");
    const myCheck = document.getElementById("myCheck");
    // const searchword = document.getElementById("searchword");
    //login 
    let logPassword = document.getElementById("logpwd");
    let logEmail = document.getElementById("logemail");
    let Users = []
    let me = []


   
    window.addEventListener('load', () => {
       
        document.getElementById("cartNo2").innerHTML = newarray.length
        // window.location.data-bs-target = "App.html"
    //   window.data-bs-target="#myModal2"

    })
    let gee = document.getElementById("myAccount");
    
    let iman = "red"
    function pickup() {
        if (iman == "red") {
            document.getElementById("box2-content").hidden = false
            document.getElementById("selfpickup").hidden = true
            iman = "blue"
        }
        else {
            document.getElementById("box2-content").hidden = true
            document.getElementById("selfpickup").hidden = false
            iman = "red"
        }
    }
    
    function next2(){
        document.getElementById("amount").value = sum
    }



    // paystark//

    const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_8c2bbbc0c45665138840a00331959225a7b20cfd', // Replace with your public key
    email: document.getElementById("input3").value,
    amount: document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      document.getElementById("myModal3").style.display ="block"
      
      
    }
  });

  handler.openIframe();
}
window.addEventListener
let newdate = new Date

let datearr = ["JAN","FEB","MAR","APRIL","MAY","JUNE","JULY","AUG","SEP","OCT","NEV","DEC"]
let date = newdate.getDate()
let month = newdate.getMonth()
let year = newdate.getFullYear()

document.getElementById("time2").innerHTML += `${date}/${datearr.at(month)}/${year}`
