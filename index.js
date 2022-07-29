let showColor = document.getElementById("show-color")
const colors = ['red', 'yellow', 'blue', 'gold', 'orange', 'green', 'violet', 'indigo', '#deb887', '#7fff00', '#adff2f']
//let colorPosition = 0

function flipColor(){
   // colorPosition++
   //let myColorPosition = Math.floor(Math.random()*colors.length)
    let myColorPosition = colorPosition()
    document.body.style.backgroundColor = colors[myColorPosition];
    showColor.textContent = colors[myColorPosition];
    //if (colorPosition > colors.length - 2){
        //colorPosition = 0
   // }
}

function colorPosition(){
   return Math.floor(Math.random()*colors.length)
}