console.log("Anurag")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

const changeColor = (e)=> {
    if (e.target.id === 'grey') {
      document.querySelector('body').style.backgroundColor = e.target.id;// this can be done by this also no need to allot a body to a variable like we did with const body
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';// you can also use this method to change the color of the body
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  }


buttons.forEach( (button) =>{
  button.addEventListener('click',changeColor );
});

