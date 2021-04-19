const addButton = document.querySelector(".add-button")
const productInput = document.querySelector(".product-input")
const ul = document.querySelector(".shopping-list")

// Main function to add the input value as a child of the list
const addProductToList = () => {
    if (productInput.value !== '' && productInput.value[0] !== ' ') {
        const li = document.createElement("li")
        const deleteButton = document.createElement("button")
        deleteButton.appendChild(document.createTextNode("X"))
        deleteButton.classList.add("delete-button")
        ul.appendChild(li)
        // We need to add the input text and the delete button to each li
        li.appendChild(document.createTextNode(productInput.value))
        li.appendChild(deleteButton)
        productInput.value = ''
        //-------------------------------------------------------------------------
        const deleteButtons = document.querySelectorAll(".delete-button")
        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', () => {
                deleteButton.parentElement.remove()
            })
        })
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