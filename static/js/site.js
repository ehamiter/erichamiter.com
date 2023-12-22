function showTheRightBackgroundOnTheRightDevice() {
  let isPortrait = window.matchMedia("(orientation: portrait)").matches;
  let backgroundImage = isPortrait ? './static/images/bg-portrait.jpg' : './static/images/bg.jpg';
  document.querySelector('.bg-image').style.backgroundImage = `url('${backgroundImage}')`;
}
document.addEventListener('DOMContentLoaded', function() {
  showTheRightBackgroundOnTheRightDevice();
  window.addEventListener("resize", showTheRightBackgroundOnTheRightDevice);
});
