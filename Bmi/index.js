const form = document.querySelector('form');

const bmi=function (e) {
    e.preventDefault();// it stope the form to submit, form generally submit it by post and get method
    
    /*
     if you declare the height and weight outside the function then it will save the null data
    because you are takeing the value just after the loading of the page not when the user enters the value. 
    and it will not update the value of height and weight when the user enters the value in the input field.
    so kindly take the value of height and weight inside the function so that it will take the value when 
    the user enters the value in the input field.
    */
    
    const height = parseInt(document.querySelector('#height').value);// parseInt is used to convert string to integer, its a string function   
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
  
    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
    //   results.innerHTML = `<span><p> Your BMI is = ${bmi}</span>`;
    results.appendChild(document.createTextNode(`Your BMI is = ${bmi}`));// this is the same as the above line but more optimal
   
    }
  }
form.addEventListener('submit',bmi);

