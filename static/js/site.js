tippy('.link', { placement: 'bottom' });

const toggles = document.querySelectorAll('.js-change-theme');
const body = document.querySelector('body');
const profile = document.getElementById('profile');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    if (body.classList.contains('text-gray-900')) {
      body.classList.replace('text-gray-900', 'text-gray-100');
      profile.classList.replace('bg-white', 'bg-gray-900');
    } else {
      body.classList.replace('text-gray-100', 'text-gray-900');
      profile.classList.replace('bg-gray-900', 'bg-white');
    }
  });
});
