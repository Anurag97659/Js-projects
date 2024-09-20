let a=0;
let count = function() {
    a++;
    document.getElementById('count').innerHTML = `Count: ${a}`;
    document.querySelector('#body').style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}
let x;
let sa = function() {
    x = setInterval(count, 1000);
}
let sp = function() {
    clearInterval(x);
}
let re = function() {
    a=0;
    document.getElementById('count').innerHTML = `Count: ${a}`;
    sp();
    document.querySelector('#body').style.backgroundColor = '#212121';
}
document.getElementById('start').addEventListener('click', sa);
document.getElementById('stop').addEventListener('click', sp);
document.getElementById('reset').addEventListener('click', re);