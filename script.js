

let org = document.getElementById('org')
let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let fourth = document.getElementById('fourth')
let body = document.querySelector('body')

org.onclick = function(){
    body.style.background = "linear-gradient(72deg, #8f00ff, #f90081)"
}
first.onclick = function (){
    body.style.background = "linear-gradient(45deg, #1e00ff, #00eaff)"
}
second.onclick = function (){
    body.style.background = "linear-gradient(45deg, #19ff00, #9C27B0)"
}
third.onclick = function (){
    body.style.background = "linear-gradient(45deg, #ff00b3, #f2ff00)"
}
fourth.onclick = function (){
    body.style.background = "linear-gradient(45deg, #ff5900, #00e0ff)"
}