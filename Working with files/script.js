//CREATING ELEMENTS
const body = document.body;
body.append("Hello World!"); // .append() can add multiple elements and strings at once; .appendChild() can only append one element at a time (no strings). 

//MODIFYING TEXT IN ELEMENTS
const div = document.createElement("div")
body.append(div) // a crucial step as crating something in javascript is different than adding it to the page
div.innerText = "Hello World!!!"
div.textContent = "Hello World2! " // Difference: .innerText respects CSS styles, while .textContent does not.
// .textContent also Replaces everything, including the previously set innerText, with "Hello World2!".
// to show both texts, append
div.textContent += "How are you? "

//MODIFYING HTML INSIDE ELEMENTS
div.innerHTML += "<strong> <br> Bold Text</strong>"; //can be risky if user input is involved
//a secure way to do the same is:
const strong = document.createElement("strong")
strong.innerText = "   and safer Bold text"
div.append(strong)

//REMOVING ELEMENTS FROM THE DOM
const content = document.querySelector(".content")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove()

//MODIFYING ATTRIBUTES
console.log(spanHi.getAttribute("id"))
console.log(spanHi.id)
div.setAttribute("id", "myDiv")
spanHi.removeAttribute("id")

//WORKING WITH DATA ATTRIBUTES
console.log(spanHi.dataset)
console.log(spanHi.dataset.test)
strong.dataset.newName = "new name"

//WORKING WITH CLASSES
spanHi.classList.add("new-class")
article.classList.toggle("hidden") //if present then removes, if not then adds
article.classList.toggle("default", true); //always adds

//MODIFYING STYLES
strong.style.color = "red"
strong.style.backgroundColor = "yellow"
body.style.cssText = "color: white; background-color: black; padding: 10px;";
