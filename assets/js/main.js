const buttons = document.querySelectorAll("#video_play");
const videoContainer = document.querySelector("#video");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Düğmeye tıklandı
      videoContainer.style.display = "block";
  
      // Videonun URL'sini değiştir
      const video = videoContainer.querySelector("video");
      const videojs = document.querySelector("#my-video");

      const video_url = button.dataset.video;
      const imageUrl = button.dataset.image;

      video.poster = imageUrl;
      video.src = video_url;
    });
  });

const hideBtn = document.getElementById("video_close");

hideBtn.addEventListener("click", function() {
  // Gizle düğmesine tıklandı
  videoContainer.style.display = "none";
});