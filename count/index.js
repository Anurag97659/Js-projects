let a=0;
let count = function() {
    a++;
    document.getElementById('count').innerHTML = `Count: ${a}`;
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
}
document.getElementById('start').addEventListener('click', sa);
document.getElementById('stop').addEventListener('click', sp);
document.getElementById('reset').addEventListener('click', re);