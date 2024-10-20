// Step 1: Old School HTML Attribute Method
function showAlertOldSchool() {
    alert("I have been clicked");
}

// Step 2: DOM Element Method by ID
window.onload = function() {
    var buttonByID = document.getElementById("buttonByID");
    buttonByID.onclick = function() {
        alert("I have been clicked");
    };

    // Step 3: Event Listener Method with User-Defined Function
    var buttonWithEventListener = document.getElementById("buttonWithEventListener");
    buttonWithEventListener.addEventListener("click", showAlertEventListener);

    // Step 4: Inline Callback Function
    buttonWithEventListener.addEventListener("click", function() {
        alert("I have been clicked");
    });
};

// Step 3: User-Defined Function
function showAlertEventListener() {
    alert("I have been clicked");
}
