window.onload = pageLoad;

function pageLoad(){
	let form = document.getElementById('myForm');
    form.onsubmit = password;
}

function password(){
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('re-password').value;
    if(password != repassword){
        alert("Password ไม่ตรงกัน")
        return false;
    }
}