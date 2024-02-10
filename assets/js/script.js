function loadVideo() {
  // Remplacez la miniature par l'iframe de la vidéo
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/5zxeHHqHQns?si=-zqkulwxvLddY-_w"'; // Remplacez VIDEO_ID par l'identifiant de la vidéo YouTube
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;

  var thumbnail = document.getElementById('video-thumbnail1');
  thumbnail.parentNode.replaceChild(iframe, thumbnail);
}
function loadVideo2() {
  // Remplacez la miniature par l'iframe de la vidéo
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/Uy4Y5Tqv7QU'; // Remplacez VIDEO_ID par l'identifiant de la vidéo YouTube
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;

  var thumbnail = document.getElementById('video-thumbnail2');
  thumbnail.parentNode.replaceChild(iframe, thumbnail);
}
const menu = document.querySelector('.menu');
const navToggle = document.querySelector('.mobile-nav-toggle');
navToggle.addEventListener('click', () => {
  const visibility = menu.getAttribute('data-visible');
  if (visibility === "false"){
    menu.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    menu.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
 
  }
});
