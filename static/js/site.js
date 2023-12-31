function resizeCanvas() {
  var canvas = document.getElementById("canvasBackground");
  var body = document.body;
  var html = document.documentElement;

  canvas.width = window.innerWidth;
  canvas.height = Math.max(body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight,
                       window.innerHeight);

  draw();

}

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

function draw() {
  var canvas = document.getElementById("canvasBackground");
  var ctx = canvas.getContext("2d");

  // Apply a blur effect
  ctx.filter = 'blur(99px)'; // Adjust the pixel value to increase/decrease blur

  // Background color
  ctx.fillStyle = '#78909C'; // cool grey/green/blue color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 20; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var size = Math.random() * 500; // Larger size for overlap
    var color = `hsla(${100 + Math.random()*100}, 40%, 20%, 0.5)`;


    ctx.fillStyle = color;

    switch(Math.floor(Math.random() * 3)) {
      case 0:
        ctx.fillRect(x, y, size, size);
        break;
      case 1:
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 2:
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - size);
        ctx.closePath();
        ctx.fill();
        break;
    }

    // Fine geometric lines
    ctx.strokeStyle = '#607D8B'; // Darker shade for contrast
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }

  // Reset filter to none after drawing
  ctx.filter = 'none';
}

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);



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
