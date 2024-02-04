
let transactionNumber = 0;

// Function to update and display the transaction number
function updateTransactionNumber() {
    transactionNumber++;
    document.getElementById("receipttransnum").textContent = transactionNumber;
}

// Function to handle the "Next Customer" button click
function handleNextCustomer() {
    // Perform any additional logic or actions here
    // ...

    // Update the transaction number
    updateTransactionNumber();

    // Clear the cart, set a new transaction number, and clear amounts (you can implement these functions)
    cartClear();
    transactionNumber();
    clearAmount();

    // Close the modal (if using Bootstrap modal)
    $('#receiptModal').modal('hide');
}

// Add other functions and logic as needed
