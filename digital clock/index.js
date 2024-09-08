const c = document.getElementById('clock');
function cloc(){
    let date = new Date();
    // clock.ammendChild(document.createTextNode(date.toLocaleTimeString()));
      c.innerHTML = date.toLocaleTimeString();
}
setInterval(cloc, 1000);
// what is setInterval?
// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

