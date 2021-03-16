function myFunction(x) {
  x.classList.toggle("change");
}

///////////////////////////////// Clone Google ////////////////////////////////////////

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

////////////////////////////////// BookOnline ////////////////////////////////////////

var modal = document.getElementById("myModal1");

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img02");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close1")[0];

span.onclick = function() { 
    modal.style.display = "none";
}