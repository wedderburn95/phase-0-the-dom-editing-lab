  
const testVar = "hi"

someElement.removeChild(someChildElement);
const ul = document.getElementsbyTagName('ul')[0];
ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove();

document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";