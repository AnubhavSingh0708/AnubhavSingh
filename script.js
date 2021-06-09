window.onload = function(){
 setTimeout(function(){
   document.getElementById('particleFrame').src = 'https://editor.p5js.org/anubhav0708/embed/jfdSCQNU2';
 },10000);
};
window.onscroll = function() {myFunction()};
var div1=document.getElementByID("div1")
var div1y = div1.offsetTop;
var i = 0;
var txt = '<h1 style="font-size:80px;">Hi There!</h1><br>welcome to my site I am anubhav a developer by hobby I started developing when I was at 6th standard in 2019';
var speed = 50;

		/* Function to stick the nav bar */
		function myFunction() {
			if ((window.pageYOffset + window.innerHeight)>(div1y+80) ) {
			typeWriter();	
			}
			else {
				
			}
  function typeWriter() {
  if (i < txt.length) {
    document.getElementById("div1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
		}
