const addButton = document.querySelector(".add-button")
const productInput = document.querySelector(".product-input")

const shoppingList = []

addButton.addEventListener('click', (e) => {
    shoppingList.push(productInput.value)
})