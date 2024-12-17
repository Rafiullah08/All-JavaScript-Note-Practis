// ++++++++++ class 31 +++++++++
// Dom => document object model


// ++++++++++++ class 32 ++++++++++
// All DOM selectors NodeList and HTMLCollection


// innerText => using "innerText" will only return the visible text content, excluding the hidden text
// textContent = > using textContent will return the complete text content, including the hidden text 
// innerHTML = return html node 

// html collection and nodelist is not a pure array
// document.getElementById('')
// document.getElementByClassName('')
// document.querySelector('')
// document.querySelectorAll('')


// +++++++++++++ class 33 +++++++++++++++
// How to create a new element in DOM

const div = document.createElement('div')
div.id = Math.floor(Math.random()* 10 +1)
div.className = "parent"
div.setAttribute('title', "parent")

div.style.backgroundColor = "green"
div.style.color = "white"
div.style.padding = "12px"
div.style.borderRadius = "12px"

const h1tag = document.createElement('h1')

const text = document.createTextNode("Hello World")

h1tag.appendChild(text)
div.appendChild(h1tag)
document.querySelector('body').appendChild(div)




// ++++++++++++++ class 34 +++++++++++++
// Edit and remove elements in DOM

// nth-child(2) 






function addLang(newLanguage) {
    let list = document.querySelector('.list')

let ul = document.createElement("ul")
 list.appendChild(ul)

let li = document.createElement('li')
li.innerHTML = newLanguage 
ul.appendChild(li)
console.log(list);

}

addLang("javaScript")
addLang("php")
addLang("python")

