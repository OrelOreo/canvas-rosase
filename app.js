let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;
let y = 0;
let tour = 0;
ctx.translate(innerWidth / 2, innerHeight / 2);

function dessin(){

requestAnimationFrame(dessin);

 ctx.beginPath();
 ctx.strokeStyle = '#EDF5E1';
 ctx.arc(x,y,100,0,2*Math.PI);
 ctx.stroke();

 ctx.rotate(30 * Math.PI / 180);
 tour = tour + 30;

 if(tour > 7200){
  return;
 }
 if(tour % 360 === 0){
  x += 10;
  y += 10;
 }

}

dessin()