var video = {
  // variables come first
  videoPlayer : document.querySelector('video'),
  vidThumbs : document.querySelectorAll('.vid-thumb'),
  volumeIndicator : document.querySelector('.vol-indicator'),

  volOn() {
      video.videoPlayer.muted = false;
      video.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up');
  },

  volOff() {
      video.videoPlayer.muted = true;
      video.volumeIndicator.classList.replace('fa-volume-up', 'fa-volume-off');
  },

  popOverlay() {
    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.add('show-overlay');

    overlay.querySelector('i').addEventListener('click', video.replayVideo, false);
  },

  replayVideo() {
    video.videoPlayer.currentTime = 0;
    video.videoPlayer.play();

    let overlay = document.querySelector('vid-overlay');
    overlay.clasList.remove('show-overlay');
  },

  fetchVideoThumbs() {
    const url = './includes/functions.php?getVideos=true';

    fetch(url) //do another fetch call
      .then((resp) => resp.json()) //convert to json
      .then((data) => { video.loadVideoThumbs(data); })
      .catch(function(error) {
        console.log(error);
      });
  },

  loadVideoThumbs(data) {
    debugger;

    //add video thumbnails here
  },

  init() {
    console.log('video module added');
    video.videoPlayer.addEventListener('mouseover', video.volOn, false);
    video.videoPlayer.addEventListener('mouseout', video.volOff, false);
    video.videoPlayer.addEventListener('ended', video.popOverlay, false);

    video.fetchVideoThumbs();
  }
}

video.init();
