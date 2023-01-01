// Task 1
const userForm = document.getElementById('userForm');
const messageForm = document.getElementById('messageForm');

const button1 = userForm.button;
const button2 = messageForm.button;

button1.addEventListener('click', (event) => {

    event.preventDefault();
    const userObj = {
        name: userForm['name'].value,
        age: userForm['age'].value,
        password: userForm['password'].value
    };
    userForm.reset();
    console.log(JSON.stringify(userObj));

});

button2.addEventListener('click', (event) => {

    event.preventDefault();
    const valueInput = {
        message: messageForm['message'].value
    };
    const result = JSON.stringify(valueInput);
    console.log(JSON.parse(result));

});





