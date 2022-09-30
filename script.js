window.location.assign('https://anubhavsingh0708.github.io/');
     window.addEventListener("click", function(){
      window.navigator.vibrate(50);
      var audiov = document.getElementById("myAudio"); 
      audiov.play();
    });
  
     var div1v=document.getElementById('div1');
     var div1y = div1v.offsetTop;
     var div2v=document.getElementById('prank');
     var div2y = div1v.offsetTop;
     var chatbotv=document.getElementById('div1');
     var chatboty = div1v.offsetTop;
     var i = 0;
     var txt = ' to my site I am Anubhav a hobbyist developer';
     var speed = 50;
     ScrollTrigger.addEventListener("scrollStart", myFunction());
  function myFunction() {
  div1y = div1v.offsetTop; 
  div2y = div2v.offsetTop;
  if ((window.pageYOffset+window.innerHeight)>div2y) {
    runprank();
    }
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
   
     
  
  
  var doge = new Image();
  doge.src = 'http://vignette2.wikia.nocookie.net/camphalfbloodroleplay/images/0/05/Doge.png/revision/latest?cb=20140628024222';
 
  
  
  function runprank() {
    setTimeout(function(){
    var ww = window.innerWidth, wh = window.innerHeight;
    
    var w = doge.width, h = doge.height;
    var a, x, y, s, img;
    
    for (var i = 0; i < 200; i++) {
      a = Math.randomDec(-1.5, 1.5, 6);
      s = Math.randomDec(0.8, 1.2, 6);
      x = (Math.randomInt(0, ww) - w*s/2)/ww*100;
      y = (Math.randomInt(0, wh) - h*s/2)/wh*100;
      
      img = document.createElement('img');
      img.src = doge.src;
      img.style.cssText = 'position: fixed;'
        + 'top: ' + y + '%;'
        + 'left: ' + x + '%;'
        + 'transform: scale(' + s + ') ' + 'rotate(' + a + 'rad)' + 'translateZ(0);'
        + 'animation: wow .4s ease-in-out 0s infinite alternate;';
      document.body.appendChild(img);
    }

    setTimeout(function(){
    location.assign("prank.html");
    },5000);
  },0500);
  }
