// Events
function handleClicked() {
    console.log("Button Clicked");

}

document.getElementById("button").addEventListener('click', handleClicked)

// dbclick, mouseup, mousedown


const box = document.getElementById("box")
// mouseenter, mouseover
// box.addEventListener('mouseenter', ()=>{
//     console.log("Mouse entered")
// })

box.addEventListener('mousemove', runEvent)
function runEvent(e) {
    console.log("Event type: "+e.type)

    // document.getElementById("output").innerHTML = '<h3>MouseX: </h3>'+e.offsetX+'<br>'+'<h3>MouseY: </h3>'+e.offsetY
    box.style.backgroundColor = "rgb("+e.offsetX+','+e.offsetY+','+40+')'
}