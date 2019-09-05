// localStorage.setItem('email','virakcambodia44@gmail.com');
// console.warn(localStorage.getItem('email'));
// localStorage.removeItem('name');
// console.log(localStorage.length);
// //session local
// sessionStorage.setItem('username', 'administrator');
// sessionStorage.setItem('pass', 'pa@@worD');
// console.warn(sessionStorage.getItem('pass'));
// document.cookie = "firstName=virak.ran;expires=" + new Date(2020,0,1).toString();
// localStorage.setItem('name','virak');
// localStorage.setItem('Password','vb');
function name() {
    const names = document.querySelector('#username').value;
    const pass = document.querySelector('#pass').value;
    const localUser = localStorage.getItem('name');
    const localPass = localStorage.getItem('Password');
    
    if( names == localUser && pass == localPass) {
        $.notify("Login success!!" , "success");
    }else {
        $.notify("login fail!!" , "error");
    }
}
var btn = document.querySelector('#btn');
btn.addEventListener('click', name);

function insert(num) {
    document.querySelector('#username').value += num;
}
