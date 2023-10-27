let user = document.getElementById("username")

let pass = document.getElementById("password")

let btn = document.getElementById("btn")

let span = document.getElementById("sp")

btn.addEventListener("click",()=>{
    if (user.value=="arsalan" , pass.value=="12345") {
       span.innerHTML=`<a id="btn" class="btn" href="pro.html">
       correct
   </a>`
    }else{btn.innerHTML="incorrect"}
})