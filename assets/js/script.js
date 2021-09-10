const btn = document.querySelector('#send-contact')

btn.addEventListener("click", function(){
    let name = document.querySelector('#name').value;
    let name = document.querySelector('#email').value;
    let name = document.querySelector('#message').value;

    let objJSON = []

    objJSON.push(name);
    objJSON.push(email);
    objJSON.push(message);

    console.log(objJSON);
})