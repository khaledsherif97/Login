"use strict"
const emailInputLog= document.querySelector('#userEmailLog');
const passInputLog= document.querySelector('#userPassLog');
const btnLogIn=document.querySelector('#btnLogIn');

var usersList=[];
usersList = JSON.parse( localStorage.getItem('users')  );

document.getElementById('btnLogIn').addEventListener('click', function () {
    if (emailInputLog.value == '' || passInputLog.value == '') {
        document.getElementById('message').innerHTML = `<p class ='text-center'>All inputs is required</p>`;
    } else {
        logIn();
    }
})

function logIn() {
    
    for (let i = 0; i < usersList.length; i++) {
      if (usersList[i].email===emailInputLog.value && usersList[i].pass===passInputLog.value) {
        console.log(usersList[i].name);
        //document.getElementById('h1Name').innerHTML += usersList[i].name ;
        var y = usersList[i].name;
        localStorage.setItem('name', y);
        location.href='../home/home.html';
      break;

      }
      else{
        console.log('no')
      }
        
    };
}