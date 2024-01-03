document.getElementById('name').innerHTML += localStorage.getItem('name');



document.getElementById('btnLogOut').addEventListener('click', function () {
    localStorage.removeItem('name');
})