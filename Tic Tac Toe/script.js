console.log("Welcome to Tic Tac Toe")
let ox_t = document.getElementById("ox_t")
let img = document.getElementById("img")
let boxItem = document.getElementsByClassName('boxItem')
let audio1 = new Audio('Media/ting.mp3')
let audio12 = new Audio("Media/ting.mp3")
let audio_2 = new Audio('Media/gameover.mp3')
let count = 0
let a = []
// boxItem[0]

function reset(){
    
    // console.log(boxItem[0].children[0].children[0].textContent) 
    boxItem[0].children[0].children[0].textContent = ""
    boxItem[0].children[1].children[0].textContent = ""
    boxItem[0].children[2].children[0].textContent = ""
    boxItem[0].children[3].children[0].textContent = ""
    boxItem[0].children[4].children[0].textContent = ""
    boxItem[0].children[5].children[0].textContent = ""
    boxItem[0].children[6].children[0].textContent = ""
    boxItem[0].children[7].children[0].textContent = ""
    boxItem[0].children[8].children[0].textContent = ""
        ox_t.textContent = "Turn for X!"
        img.style.opacity = '0'
}

function print_text(ele){
    // console.log(ele.id)
    // a[count] = ele.id 
    // console.log(a)
    // audio_2.play()
    count++;
    if(count % 2 != 0){
        ele.children[0].textContent = "X"
        audio1.play()
        ox_t.textContent = "Turn for O!"
    }
    else{
        ele.children[0].textContent = "O"
        audio1.play()
        ox_t.textContent = "Turn for X!"
    }
    if(count >= 5){
        check_result()
    }
}

function check_result(){
    //horizontal elements
    if(boxItem[0].children[0].children[0].textContent === boxItem[0].children[1].children[0].textContent && boxItem[0].children[1].children[0].textContent === boxItem[0].children[2].children[0].textContent ){
        if (boxItem[0].children[0].children[0].textContent != "" )
        {ox_t.textContent = boxItem[0].children[0].children[0].textContent + " Won!"
        // img.style.display = 'content'
        img.style.opacity = '100'}
    }
    if(boxItem[0].children[3].children[0].textContent === boxItem[0].children[4].children[0].textContent && boxItem[0].children[4].children[0].textContent === boxItem[0].children[5].children[0].textContent ){
        if (boxItem[0].children[3].children[0].textContent != "" ){
        ox_t.textContent = boxItem[0].children[3].children[0].textContent + " Won!"
        img.style.opacity = '100'}
    }
    if(boxItem[0].children[6].children[0].textContent === boxItem[0].children[7].children[0].textContent && boxItem[0].children[7].children[0].textContent === boxItem[0].children[8].children[0].textContent ){
        if (boxItem[0].children[6].children[0].textContent != "" ){
        ox_t.textContent = boxItem[0].children[6].children[0].textContent + " Won!"
        img.style.opacity = '100'}
    }
    //verticals
    if(boxItem[0].children[0].children[0].textContent ===  boxItem[0].children[3].children[0].textContent && boxItem[0].children[3].children[0].textContent === boxItem[0].children[6].children[0].textContent ){
        if (boxItem[0].children[0].children[0].textContent != "" ){
        ox_t.textContent = boxItem[0].children[0].children[0].textContent + " Won!"
        img.style.opacity = '100'}
    }
    if(boxItem[0].children[1].children[0].textContent === boxItem[0].children[4].children[0].textContent && boxItem[0].children[4].children[0].textContent === boxItem[0].children[7].children[0].textContent ){
        if (boxItem[0].children[1].children[0].textContent != "" ){
        ox_t.textContent = boxItem[0].children[1].children[0].textContent + " Won!"
        img.style.opacity = '100'}
    }
    if(boxItem[0].children[2].children[0].textContent === boxItem[0].children[5].children[0].textContent && boxItem[0].children[5].children[0].textContent === boxItem[0].children[8].children[0].textContent ){
        if (boxItem[0].children[2].children[0].textContent != "" ){
        ox_t.textContent = boxItem[0].children[2].children[0].textContent + " Won!"
        img.style.opacity = '100'}
    }
    // diagonal elements
    if(boxItem[0].children[0].children[0].textContent === boxItem[0].children[4].children[0].textContent && boxItem[0].children[4].children[0].textContent === boxItem[0].children[8].children[0].textContent ){
        if (boxItem[0].children[0].children[0].textContent != "" ){
        ox_t.textContent = boxItem[0].children[0].children[0].textContent + " Won!"
        img.style.opacity = '100'}
    }
    if(boxItem[0].children[2].children[0].textContent === boxItem[0].children[4].children[0].textContent && boxItem[0].children[4].children[0].textContent === boxItem[0].children[6].children[0].textContent ){
        if (boxItem[0].children[2].children[0].textContent != "" ){
        ox_t.textContent = boxItem[0].children[2].children[0].textContent + " Won!"
        img.style.opacity = '100'}
    }
    if(count == 9 && (ox_t.textContent.includes("Won") == false)){
        ox_t.textContent = "Match Drawn!"
        audio_2.play()
    }
    console.log(boxItem[0].children[0].children[0].textContent)
}