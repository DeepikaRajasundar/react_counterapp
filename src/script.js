document.addEventListener("DOMContentLoaded", function() {
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const countInput = document.getElementById("count");

    incrementButton.addEventListener("click", function() {
        countInput.value = parseInt(countInput.value) + 1;
    });

    decrementButton.addEventListener("click", function() {
        countInput.value = parseInt(countInput.value) - 1;
    });
});
