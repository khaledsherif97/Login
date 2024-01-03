"use strict"
const nameInput= document.querySelector('#userName');
const emailInput= document.querySelector('#userEmail');
const passInput= document.querySelector('#userPass');
const btnSign=document.querySelector('#btnSign');

var usersList=[];
if(localStorage.getItem('users') !== null)  {
    usersList = JSON.parse( localStorage.getItem('users')  );
    console.log (usersList);
}
else{
   // users=[];

};
function addUser() {
    if (nameInput.value== '' || emailInput.value == '' || passInput.value == '') {
        document.getElementById('message').innerHTML = `<p class = 'text-center'>All inputs is required</p>`
    } else {
    var user={
        name:nameInput.value,
        email:emailInput.value,
        pass:passInput.value,
    };
    usersList.push(user);
    location.href='../log in/log in.html';
   
    //local
    localStorage.setItem('users' , JSON.stringify(usersList));  
    };
   
    
};
btnSign.addEventListener('click', addUser);