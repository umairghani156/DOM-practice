//var heading = document.querySelector("h1").style.color = "red";
/*
const anColors = ['yellow', 'black', 'green', 'red']
const colors = ['red', 'blue', 'pink', 'green', 'yellow', 'black']; // colors in an array's length to match with random number
document.body.style.backgroundColor = "blue" // background color change
document.querySelector("button").style.color = "red" // querySelector grasp the tag or element or id, className
const element = document.getElementById('btn'); // gettingElement by id "btn"
element.style.backgroundColor = 'white';  // assign color on text

function myHandler() {
    const buttonText = document.getElementById('btn');
    buttonText.style.padding = '10px'
    let changeColor = Math.floor(Math.random() * anColors.length);
    let randomColors = Math.floor(Math.random() * colors.length);
    document.querySelector("h1").style.color = colors[randomColors];
    let spanCheck = document.querySelector('span');
    spanCheck.style.color = anColors[changeColor]
}
myHandler()
console.log(myHandler());
console.log(window);// returns a node object or a node list which is an arraylike object

// returns a node object or a node list which is an arraylike object
const btn = document.getElementById('btn');
const name =btn.nodeName;
const name2 = btn.innerHTML;
const css = btn.style;  

console.log(btn);   // This shows a nodelist filled with all species inside the element/button
console.log(name); // This shows the element name means button
console.log(name2); // This shows inner text means to say between Opening tag & Closing tag
console.log(css);  // This returns a node object which is like an array of object

// Select the tag or group of elements
// To apply css to effect the tag

// getElementById('element')
const h1 = document.getElementById('h1');
h1.style.color = 'red';

const btn_2 = document.getElementById("btn_2");
btn_2.style.backgroundColor = 'blue';
btn_2.style.color = 'white';


// getElementsByTagName('tagName')
// HTMLcollection ==> Array like object
// It can take Index and length but can't use array methods like (for each)
const h1Tag = document.getElementsByTagName('h1'); // h1 is a tagName
h1Tag[0].style.color = 'red'
console.log(h1Tag.length);

const items = document.getElementsByTagName('li');
console.log(items); // <==HTMLcollection that's why foreach() doesn't work on it
items.forEach(function(h1) {
    
}); // Expected error foreach() is not a function bcz it doesn't work on HTMLcollection

//querySelectorAll() in most cases
//Nodelist -objects are collection of nodes
// it can run foreach()
// it turn HTMLcollection into an array by using spread operator[...]
// After that can use any array properties and methods

const items1 = document.getElementsByTagName('li');
//items1[0].style.color = 'red'
const convertItemsIntoArray = [...items1];
convertItemsIntoArray.forEach(function(val) {
    console.log(val);
});

console.log(items1);
console.log(convertItemsIntoArray);


//decide to apply effect by className
//getElementByclassName
const items2 = document.getElementsByClassName('special');
//items2.style.color = 'red' // expected result shows "cant set properties of undefined"
items2[2].style.color = 'red';

// getElementByTagName
const ultag = document.getElementsByTagName('ul');
ultag[0].style.color = 'blue';
console.log(items2);
const loopTr = document.getElementsByTagName('li');
const change = [...loopTr]
change.forEach(function(val){
    console.log(val.style.color = 'red');
});

// Use querySelector or querySelectorAll 
// It grasps elements, Id and className and we can change the effect by using foreach()
//const useQuery = document.querySelector('#kuro');//it shows null if we directly put classname or id name
const useQuery = document.querySelector('#kuro'); 
console.log(useQuery);
useQuery.style.backgroundColor = 'blue';
useQuery.style.color = 'white';

// To apply effect all the texts inside the class 
const checkClass = document.querySelectorAll('.special');
console.log(checkClass);
//const find = [...checkClass];
checkClass.forEach(function(val){
    console.log(val.style.color = 'red');
    
})

// To apply effect on list items 

const lastItem = document.querySelector('li:last-child').style.backgroundColor = 'white';
console.log(lastItem);

*/

// In the following I grasp the child by taking index of every element/tag
// After that I reach at the paragraph then I change the innertext of the paragraph 
//console.log(document.childNodes[1].lastChild.childNodes[1].childNodes[1].textContent = 'My name is umair');

// Find a parent of a child 
//const findParents = document.getElementById('para');
//console.log(findParents.parentNode); //<==== parentNode & parentElement shows the same tag and text of the parent
//console.log(findParents.parentElement);

// Find the sibling of a child
const findParents = document.getElementById('para');
console.log(findParents.previousSibling); // here return the whitespace bcz JS considers whitespace as a text
console.log(findParents.previousSibling.previousSibling.textContent = "Hello World"); // When we write previousSibling Two times it brought the main sibling
                                                                                     // or else it shows text /whitespace as a previousSibling
console.log(findParents.nextSibling.nextSibling.style.color = 'red');

