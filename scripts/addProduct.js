const addButton = document.querySelector(".add-button")
const productInput = document.querySelector(".product-input")
const ul = document.querySelector(".shopping-list")

addButton.addEventListener('click', () => {
    const li = document.createElement("li")
    ul.appendChild(li)
    li.appendChild(document.createTextNode(productInput.value))
})