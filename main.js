let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

/* hover over icons */
$('li').mouseover(function(e)
{
    e.stopPropagation();
    $(this).addClass('currentHover');
});

$('li').mouseout(function()
{
    $(this).removeClass('currentHover');
});
/* hover over buttons */

$('button').mouseover(function(e)
{
    e.stopPropagation();
    $(this).addClass('currentHoverButton');
});

$('button').mouseout(function()
{
    $(this).removeClass('currentHoverButton');
});

/*
I intially tried to make a slide show of images that would rotate over a time period, and on click. I could not get the 
function to work properly, so I have now just added a static image of my project to the HTML. Notes and code attempet
for slider are below.

Project image slideshow code, right now I am using an array to house my images from
my single project, Canadian Geography Quiz. The goal is to make an array of arrays,
which will house arrays of images from all projects. 

let change = document.getElementById('projectSlides');
let counter = 0;
let myPictures = [
    "C:\Users\Dell\projects\portfolio\images\geoQuizImgs\quiz-app-screenshot-javaScriptjs.PNG",
    "C:\Users\Dell\projects\portfolio\images\geoQuizImgs\quiz-app-screenshot-semanticHTML.PNG",
    "C:\Users\Dell\projects\portfolio\images\geoQuizImgs\quiz-app-screenshot-score.PNG",
    "C:\Users\Dell\projects\portfolio\images\geoQuizImgs\quiz-app-screenshot.PNG",
];

function nextPic() {
  counter += 1;
  if (counter > myPictures.length -1) {
    counter = 0;
  }
  
  change.style.backgroundImage = "src=" + myPictures[counter] + ">"; 
}

// Here's how you can hookup the click event
change.addEventListener('click', nextPic);

// Load the first image
counter -= 1; // Do this so it starts at the first, not the second
nextPic();
*/