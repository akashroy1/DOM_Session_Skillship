console.log('Document Object Manipulation Session')
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// document.title = 123
// .head .body .doctype .all

// document.all[5].textContent = 'ABC'
// .forms .links .images


// Get Element By Id
// document.getElementById("header-title").textContent = "Akash"

// innerText && textContent

// const headerText = document.getElementById("header-title")
// headerText.innerHTML = '<h3>Hello</h3>'
// headerText.style.border = '1px solid black'


// Get Element By ClassName
// const items = document.getElementsByClassName("list-group-item")
// items[1].textContent = 'Changed 2'

// for(let i=0; i<items.length; i+=2){
//     items[i].style.backgroundColor = "#f4f4f4"
// }


// Get Element By Tag Name
// const li = document.getElementsByTagName("li")
// for(let i=0; i<items.length; i+=2){
//     li[i].style.backgroundColor = "#f4f4f4"
// }

// Query Selector
// const header = document.querySelector("#header-title")
// header.textContent = "Query Selector"

/* changes only the first when more than one is available */
// const inputs = document.querySelector("input")
// inputs.placeholder = "Add Item"
// const submit = document.querySelector("input[type='submit']")
// submit.value = "Add"

// Query Selector ALl
// const titles = document.querySelectorAll('.title')
// console.log(titles)

// const oddLis = document.querySelectorAll('li:nth-child(odd)')
// oddLis.forEach((li)=>{
//     li.style.backgroundColor = "#ccc"
// })