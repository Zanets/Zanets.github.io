const canvas = document.querySelector("#backg");
const ctx = canvas.getContext('2d');
// center point
const center = { x: ctx.clientWidth/2, y: ctx.clientHeight/2 };
// max distance from the center
const radius = 10;
// centripetal force, the larger it gets the more concentrated the dots are
const centripetal = 1;
const imgData = ctx.createImageData(canvas.clientWidth, canvas.clientHeight);

const colors = [
    [ 93, 169, 236 ]
];
const starAmount = 150;


  for (let i = 0; i < starAmount; i++) {
    ctx.beginPath();
    const dist = (Math.random() ** centripetal) * radius;
    const angle = Math.random() * Math.PI * 2;
    var rand_x = dist * Math.cos(angle) + center.x;
    var rand_y = dist * Math.sin(angle) + center.y;
    ctx.arc(rand_x, rand_y, 2, 1, 1 * Math.PI);
    ctx.fillStyle = "#0855A2";
    ctx.fill();
    ctx.closePath();
}