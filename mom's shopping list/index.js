const form = document.addItem
const list = document.getElementById("list")
const items = document.addItem.value
form.addEventListener("submit",function(e){

}
)

const myList = document.createElement("li")
list.append(myList)

const div = document.createElement("div")
div.textContent = form.items.value
myList.prepend(div)


const editButton = document.createElement("button")
editButton.textContent="edit"
myList.append(editButton)



const xButton = document.createElement("button")
xButton.textContent = "X"
myList.append(xButton)




// const input = document.getElementById("add-todo")
// input.addEventListener("submit", function(){
    
//     var text = document.getElementById("title").value
//     var li ="<li>" +text+ "</li>"
//     document.getElementById("list").appendChild(li)
// })


//     const h1 = document.createElement('h1')
//     h1.textContent = title
//     document.getElementsByTagName("body")[0].append(h1)
