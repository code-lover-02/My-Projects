console.log('Welcome to Spotify!')
let progressBar = document.getElementById('myProgressBar')
let audioElement = new Audio('songs/10.mp3');
let masterPlay = document.getElementById('masterPlay')
let playPrevious = document.getElementById('previous')
let playNext = document.getElementById('next')
let gif = document.getElementById('playing_gif')
let total_t = document.getElementById('')
let pause_icon = document.createElement('i')
let song_Info = document.getElementsByClassName('songInfo')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let index = 10
// let contact = document.getElementById('contact')
// contact.style.color = 'red';
pause_icon.className = "fa-solid fa-3x fa-circle-pause" 
let songs = [
    { songName: "Let me Love you",filePath:'songs/1.mp3', coverPath:"covers/1.jpg" },
    { songName: "Salam-e-Ishq",filePath:'songs/2.mp3', coverPath:"covers/2.jpg" },
    { songName: "How's the Josh",filePath:'songs/3.mp3', coverPath:"covers/3.jpg" },
    { songName: "Closer",       filePath:'songs/4.mp3', coverPath:"covers/4.jpg" },
    { songName: "Get out of my head", filePath:'songs/5.mp3', coverPath:"covers/5.jpg" },
    { songName: "Let me Love you",filePath:'songs/6.mp3', coverPath:"covers/6.jpg" },
    { songName: "Let me Love you",filePath:'songs/7.mp3', coverPath:"covers/7.jpg" },
    { songName: "Let me Love you",filePath:'songs/8.mp3', coverPath:"covers/8.jpg" },
    { songName: "Let me Love you",filePath:'songs/9.mp3', coverPath:"covers/9.jpg" },
    { songName: "Let me Love you",filePath:'songs/10.mp3', coverPath:"covers/10.jpg" }
]

// songs.forEach((element,i) => {
//     console.log(element,i)
//     element.getElementsByTagName("img")[i].src=songs[i].filePath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName
// })

let songItemPlay = document.getElementsByClassName("songItemPlay")
// console.log(songItemPlay)
const makeAllPlays = () =>{
    Array.from(songItemPlay).forEach((ele)=>{
        ele.classList.remove('fa-circle-pause')
        ele.classList.add('fa-circle-play')
    })
}
Array.from(songItemPlay).forEach((ele)=>{
    ele.addEventListener('click', ()=>{
        // console.log(ele)
        index = parseInt(ele.id)
        console.log(index)
        makeAllPlays()
        ele.classList.remove('fa-circle-play')
        ele.classList.add('fa-circle-pause')
        audioElement.src = `songs/${index}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        if(index == 10){
            index = 0
        }
        song_Info[0].children[1].textContent = songs[index].songName
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})

masterPlay.addEventListener('click',play_pause)
pause_icon.addEventListener('click',play_pause)
playNext.addEventListener('click',play_next)
playPrevious.addEventListener('click',play_previous)

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate')
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value = progress
})

progressBar.addEventListener('change',()=>{
    progress = progressBar.value
    currTime = (progress*audioElement.duration)/100  
    audioElement.currentTime = currTime
})
function play_next(){
        // index = parseInt(ele.id)
        
        if(index == 10){
            index = 1
        }
        else{
            index += 1;
        }
        console.log(index)
        audioElement.src = `songs/${index}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
}
function play_previous(){
    // index = parseInt(ele.id)
    if(index == 1){
        index = 10
    }
    else{
        index -= 1;
    }
    console.log(index)
    audioElement.src = `songs/${index}.mp3`
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
}
function myProgressBar(){
    total_t = '4:23'
    audioElement.duration()
    progressBar.value = audioElement.played()
}
function play_pause(){
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play()
        gif.style.opacity = 1
        // masterPlay.replaceWith(pause_icon)
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else{
        audioElement.pause()
        gif.style.opacity = 0
        // pause_icon.replaceWith(masterPlay)
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
    }
}