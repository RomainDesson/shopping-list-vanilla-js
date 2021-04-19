const addButton = document.querySelector(".add-button")
const productInput = document.querySelector(".product-input")
const ul = document.querySelector(".shopping-list")

// Main function to add the input value as a child of the list
const addProductToList = () => {
    if (productInput.value !== '' && productInput.value[0] !== ' ') {
        const li = document.createElement("li")
        ul.appendChild(li)
        li.appendChild(document.createTextNode(productInput.value))
        productInput.value = ''
    }
}
// function to add the input value on the add button
addButton.addEventListener('click', () => {
    addProductToList()
})
// function to add the input value on press enter
productInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addProductToList()
    }
})