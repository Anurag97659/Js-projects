let form = document.getElementById('form');
function crossline(e){
    if(e.checked){
        e.nextElementSibling.style.textDecoration = 'line-through';
    }
    else{
        e.nextElementSibling.style.textDecoration = 'none';
    }
}
function deleteItem(e){
   e.parentElement.parentElement.parentElement.remove();
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    let getinfo = String(document.getElementById('workField').value);
    if(getinfo === ''){
        alert('Please enter a task');
    }
    else if(getinfo.length > 40){
        alert('Task is too long');
    }
    else{
        let listoption = document.createElement('li');
        listoption.id = 'option';
        listoption.innerHTML = `<div id ="bu">
                                    <input type="checkbox" id="checkbox" onclick="crossline(this)">
                                     <div id ="buu">
                                            <label for="checkbox" id ="la">${getinfo}</label>
                                            <button id="del" onclick="deleteItem(this)">Delete</button>
                                     </div>
                                </div>`;
        document.getElementById('additem').appendChild(listoption);
    }
});


