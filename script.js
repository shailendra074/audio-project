console.log("Welcome to Audio Player in Javascript");

// Initialize the variable
let songindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');


let songs = [
    { songName:'salame ique-1', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg'},
    { songName:'salame ique-2', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg'},
    { songName:'salame ique-3', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg'},
    { songName:'salame ique-4', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg'},
    { songName:'salame ique-5', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg'},
    { songName:'salame ique-6', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg'},
    { songName:'salame ique-7', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg'},
    { songName:'salame ique-8', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg'},
    { songName:'salame ique-9', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg'},
    { songName:'salame ique-10', filePath: 'songs/10.mp3', coverPath: 'covers/10.jpg'},
]
console.log(songs)


songItem.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle Play/Pause Click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekar
    prograss = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(prograss)
    myProgressBar.value = prograss;

})

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () =>{
    if(songindex>=9){
        songindex = 0;
    }
    else{
        songindex +=1;
        audioElement.src =`songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
    }
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songindex<=0){
        songindex = 9;
    }
    else{
        songindex -=1;
        audioElement.src =`songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
    }
})

