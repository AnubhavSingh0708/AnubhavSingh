window.onload = function(){
 setTimeout(function(){
   document.getElementById('particleFrame').src = 'https://editor.p5js.org/anubhav0708/embed/jfdSCQNU2';
 },10000);
};
window.onscroll = function() {myFunction()};
var div1v=document.getElementByID("div1")
var div1y = div1v.offsetTop;
var i = 0;
var txt = 'welcome to my site I am anubhav a developer by hobby I started developing when I was at 6th standard in 2019';
var speed = 50;

		/* Function to stick the nav bar */
		function myFunction() {
			if (document.body.scrollTop> 300) {
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
