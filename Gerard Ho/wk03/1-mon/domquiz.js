document.getElementsByTagName('h1')[1].textContent = "Friend";

document.getElementsByTagName('div')[1].className = 'description';

document.getElementsByTagName('div')[2].id ='';

document.getElementsByTagName('button')[0].addEventListener('click', function(){
  document.body.style.backgroundColor = 'red';
})

var favouriteColor = document.getElementById('favCol').value;

var x = document.createElement("P");
var t = document.createTextNode("This is a paragraph.");
x.appendChild(t);
document.getElementsByClassName('my-articles')[0].appendChild(x);

var countList = document.getElementsByTagName('li');
console.log(countList.length);
