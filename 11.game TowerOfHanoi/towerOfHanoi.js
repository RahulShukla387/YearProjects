 let newX =0, newY =0, strtX =0, strtY =0;
let discs = document.querySelectorAll(".disc");
for(disc of discs){
    disc.addEventListener('mousedown' , mousedown);
}

function mousedown(e){
   let disc = e.target;
   strtX = e.clientX;
   strtY = e.clientY; 
   document.addEventListener('mousemove' , mousemove);
   document.addEventListener('mouseup' , mouseup);

function mousemove(e){
    newX = strtX - e.clientX;
    newY = strtY - e.clientY;
    console.log(newX, newY);
    strtX = e.clientX;
    strtY = e.clientY;
    disc.style.top =( disc.offsetTop - newY) + 'px';
    disc.style.left =( disc.offsetLeft - newX) + 'px';
}
function mouseup(e){
  document.removeEventListener('mousemove' , mousemove);
  document.removeEventListener('mouseup' , mouseup);
}
document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);
}