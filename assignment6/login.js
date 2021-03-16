window.onload = loginLoad;

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username')
console.log(username);

const password = urlParams.get('password')
console.log(password);

function loginLoad(){
	let login = document.getElementById('myLogin');
	login.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

	let user = document.getElementById('username').value;
	let pass = document.getElementById('password').value;

	if(user == username && pass == password){
		alert('Success')
	}

	else if(user != username || pass != password){
		alert('Username หรือ Password ไม่ถูกต้อง')
		return false;
	}
}

			