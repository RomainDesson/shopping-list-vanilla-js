const deleteButtons = document.querySelectorAll(".delete-button")

deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove()
        console.log(deleteButton)
    })
})