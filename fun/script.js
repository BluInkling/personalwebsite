randbtn= document.createElement('button')
randbtn.id="nicebutton"
randbtn.innerHTML="Press Me!"
randbtn.onclick=display_random_image
document.getElementById('gametitle').appendChild(randbtn)





function display_random_image() 
{
     var theImages = [{
        src: "images/games/hutao.png",
    }, {
        src: "images/games/omori.jpg",
    }, {
        src: "images/games/p4.jpg",
    },{
        src: "images/games/p4p3.jpg",
    },{
        src: "images/games/p4tall.jpg",
    },{
        src: "images/games/p5r.png",
    },{
        src: "images/games/p5s.png",
    },{
        src: "images/games/pq2.jpg",
    },{
        src: "images/games/splatoon.png",
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
for(var i=0; i < images.length; i++) {
    images[i].parentNode.removeChild(images[i]);
}
// display the image  
const gamerbox=document.getElementById('gamebox')
gamerbox.appendChild(newImage);

}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementsByClassName("navbar")
console.log(header)

// Get the offset position of the navbar
var sticky = header[0].offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header[0].classList.add("sticky");
  } else {
    header[0].classList.remove("sticky");
  }
}














//ANIME STUFF
randbtn2= document.createElement('button')
randbtn2.id="nicebutton"
randbtn2.innerHTML="Press Me!"
randbtn2.onclick=display_random_image2
document.getElementById('animetitle').appendChild(randbtn2)


function display_random_image2() 
{
     var theImages = [{
        src: "images/anime/2.png",    }, {
        src: "images/anime/3.png",    }, {
        src: "images/anime/bakatestroom.png",    },{
        src: "images/anime/chi.png",    },{
        src: "images/anime/deku.png",    },{
        src: "images/anime/disgust.png",    },{
        src: "images/anime/fear.png",    },{
        src: "images/anime/fireforce.png",    },{
        src: "images/anime/drip.png",    },{
        src: "images/anime/fumi.png",    },{
        src: "images/anime/GOJO.png",    },{
        src: "images/anime/heh.png",    },{
        src: "images/anime/hell.png",    },{
        src: "images/anime/hina.png",    },{
        src: "images/anime/HOOOO_BOYYY.png",    },{
        src: "images/anime/itsuki.png",    },{
        src: "images/anime/kekkai.png",    },{
        src: "images/anime/onepiece.png",    },{
        src: "images/anime/pain.png",    },{
        src: "images/anime/rimuru.png",    },{
        src: "images/anime/stonk.png",    },{
        src: "images/anime/heh.png",    },{
        src: "images/anime/yosh.png",    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
newImage.id="delthisA"
// remove the previous images
var images = document.getElementsByTagName('img');
for(var i=0; i < images.length; i++) {
    images[i].parentNode.removeChild(images[i]);
}

// display the image  
const animebox=document.getElementById('animebox')

animebox.appendChild(newImage);

}




//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementsByClassName("navbar")
console.log(header)

// Get the offset position of the navbar
var sticky = header[0].offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header[0].classList.add("sticky");
  } else {
    header[0].classList.remove("sticky");
  }
}



