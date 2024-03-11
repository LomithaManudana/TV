function login()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(validateUserCredentials(username,password))
    {
        window.location.href = "video.html?username=" + username;
    }
    else
    {
        var errorElement = document.getElementById("error-message");
        errorElement.innerText = "Invalid username or password";
    }
}


function validateUserCredentials(username,password)
{
    var validUsernames = [
        "firstfloor",
        "secondfloor",
        "thirdfloor",
        "fourthfloor",
        "fifthfloor",
        "sixthfloor",
        "seventhfloor",
    ];
    return validUsernames.includes(username) && password === "Welcome123$";
}


function getQueryParam(name)
{
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


var videoAssignments = {
    "firstfloor": ["src/Christmass carols 2022.mp4",
                   "src/Womens Day 2023.mp4",
                   "src/What makes you happy.mp4"],
    "secondfloor":["src/Womens Day 2023.mp4"],
    "thirdfloor": ["src/What makes you happy.mp4"],
    "fourthfloor":[],
    "fifthfloor": ["src/Creative buddies day video.mp4"],
    "sixthfloor": ["src/Womens Day 2023.mp4"],
    "seventhfloor": ["src/Halloween Video(1).mp4"]
}


function loadUserVideo() {
    var username = getQueryParam("username");

    if(username) {
        var videoSources = getVideoSources(username);

        if(videoSources.length > 0){
            playVideos(videoSources);
        }
        else{
            alert("No Video Assigned For This Floor");
        }
    }
    else{
        alert("Invalid Username");
    }
}


function getVideoSources(floor) {
    if(videoAssignments[floor])
    {
        return videoAssignments[floor];
    }
    else
    {
        return[];
    }
}


function playVideos(videoSources)
{
    var videoPlayer = document.getElementById("videoPlayer");
    var currentVideoIndex = 0;

    videoPlayer.src = videoSources[currentVideoIndex];

    videoPlayer.addEventListener('ended',function ()
    {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        videoPlayer.src = videoSources[currentVideoIndex];
        videoPlayer.play();
    });

   
}
videoPlayer.play();

loadUserVideo();