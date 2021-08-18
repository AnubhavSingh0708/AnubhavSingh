window.onload = function(){
    myFunction();
    setTimeout(function(){
     document.getElementById('particleFrame').src = 'https://editor.p5js.org/anubhav0708/embed/jfdSCQNU2';
    document.getElementById('flag').src = 'https://anubhavsingh0708.github.io/AnubhavSingh0708/3d/';
    },10000);
    setTimeout(function(){
         document.body.style.fontFamily="'ZCOOL QingKe HuangYou', cursive";
    },5000);
   };
   window.addEventListener("click", function(){
    window.navigator.vibrate(50);
    var audiov = document.getElementById("myAudio"); 
    audiov.play();
  });
   var div1v=document.getElementById('div1');
   var div1y = div1v.offsetTop;
   var chatbotv=document.getElementById('div1');
   var chatboty = div1v.offsetTop;
   var i = 0;
   var txt = ' to my site I am Anubhav a hobbyist developer';
   var speed = 50;
   
           /* Function to stick the nav bar */
function myFunction() {
div1y = div1v.offsetTop; 
if ((window.pageYOffset+window.innerHeight)>div1y) {
typeWriter();
}
else {

 }
 setTimeout(function(){
    myFunction();
  },2000);
 }
     function typeWriter() {
     if (i < txt.length) {
       document.getElementById("div1").innerHTML += txt.charAt(i);
      i++;
       setTimeout(typeWriter, speed);
     }
   }
   document.documentElement.onclick = function() {
    navigator.vibrate(100);
    document.getElementById("myAudio").play();
   };
   document.getElementById('particleFrame').onclick = function() {
    navigator.vibrate(100);
    document.getElementById("myAudio").play();
   };
   function checkBrowser() {
          
    // Get the user-agent string
    let userAgentString = 
        navigator.userAgent;
  
    // Detect Chrome
       if( userAgentString.indexOf("Chrome") > -1)
       {

       }// Detect Firefox
       else if( userAgentString.indexOf("Firefox") > -1)
       {

       } // Detect Safari
       else if (userAgentString.indexOf("Safari") > -1)
       {

       }
       else {

       }
}
