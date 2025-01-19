// Add event listener for the form submission
document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the confirmation message element
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Add the visible class to show the confirmation message
    confirmationMessage.classList.add("visible");

    // Optionally, hide the message after a delay (e.g., 5 seconds)
    setTimeout(() => {
        confirmationMessage.classList.remove("visible");
    }, 5000); // 5000ms = 5 seconds
});
