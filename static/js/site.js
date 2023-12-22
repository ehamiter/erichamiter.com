function showTheRightBackgroundOnTheRightDevice() {
  let isPortrait = window.matchMedia("(orientation: portrait)").matches;
  let backgroundImage = isPortrait ? './static/images/bg-portrait.jpg' : './static/images/bg.jpg';
  document.querySelector('.bg-image').style.backgroundImage = `url('${backgroundImage}')`;
}
document.addEventListener('DOMContentLoaded', function() {
  showTheRightBackgroundOnTheRightDevice();
  window.addEventListener("resize", showTheRightBackgroundOnTheRightDevice);
});

tippy('.link',{
  placement: 'bottom'
})

const toggles = document.querySelectorAll('.js-change-theme');
const body = document.querySelector('body');
const profile = document.getElementById('profile');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    if (body.classList.contains('text-gray-900')) {
      body.classList.remove('text-gray-900');
      body.classList.add('text-gray-100');
      profile.classList.remove('bg-white');
      profile.classList.add('bg-gray-900');
    } else {
      body.classList.remove('text-gray-100');
      body.classList.add('text-gray-900');
      profile.classList.remove('bg-gray-900');
      profile.classList.add('bg-white');
    }
  });
});
