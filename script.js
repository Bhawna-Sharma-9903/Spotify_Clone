console.log("welcome to spotify")

// Initialise the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Maan meri jaan", filePath: "song/.mp3", coverPath: "cover/path.jpg"},
    {songName: "Maan meri jaan", filePath: "song/.mp3", coverPath: "cover/path.jpg"},
    {songName: "Maan meri jaan", filePath: "song/.mp3", coverPath: "cover/path.jpg"},
    {songName: "Maan meri jaan", filePath: "song/.mp3", coverPath: "cover/path.jpg"},
    {songName: "Maan meri jaan", filePath: "song/.mp3", coverPath: "cover/path.jpg"},
]



// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener('click',() =>{
    if (audioElement.paused  || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
 
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-circle-pause')
        gif.style.opacity = 0;

    }
})

document.getElementById("masterPlay").addEventListener('keypress',() =>{
    if (audioElement.paused  || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
 
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-circle-pause')
        gif.style.opacity = 0;

    }
})


// listen to events()
audioElement.addEventListener('timeupdate', () => {
   console.log('timeupdate');
})