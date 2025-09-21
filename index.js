// Dropdown boxes functionality
function toggleDropdown(dropdownId, arrowId, btnId) {
    var dropdown = document.getElementById(dropdownId);
    var arrow = document.getElementById(arrowId);
    var btn = document.getElementById(btnId);
    if (dropdown)
        dropdown.classList.toggle("hidden");
    if (arrow)
        arrow.classList.toggle("rotate-180");
    if (btn)
        btn.classList.toggle("border-b-2");
}
document.addEventListener("DOMContentLoaded", function () {
    var productsBtn = document.getElementById("productsBtn");
    if (productsBtn) {
        productsBtn.addEventListener("click", function () {
            toggleDropdown("productsDropdown", "productsArrow", "productsBtn");
        });
    }
});
// Sign-Up Form functionality
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("signupForm");
    var formText = document.getElementById("formText");
    var successText = document.getElementById("successText");
    if (!form)
        return;
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var valid = true;
        formText.classList.add("hidden");
        successText.classList.add("hidden");
        // Grab inputs
        var inputs = form.querySelectorAll("input");
        inputs.forEach(function (input) {
            var element = input;
            element.classList.remove("border-red-500", "focus:ring-red-500", "text-red-500");
            element.classList.add("border-black", "focus:ring-[#0360E6]", "text-black");
            // Empty check
            if (element.value.trim() === "") {
                markInvalid(element);
                valid = false;
            }
            // Email validation
            if (element.type === "email" && !isValidEmail(element.value)) {
                markInvalid(element);
                valid = false;
            }
            // Phone validation (basic: digits only, 10+ digits)
            if (element.type === "tel" && !/^\d{10,}$/.test(element.value)) {
                markInvalid(element);
                valid = false;
            }
        });
        if (!valid) {
            formText.classList.remove("hidden");
            formText.classList.add("text-red-600", "font-semibold");
            return;
        }
        // Success
        successText.classList.remove("hidden");
        alert("Form submitted successfully!");
        form.reset();
    });
    function markInvalid(element) {
        element.classList.remove("border-black", "focus:ring-[#0360E6]", "text-black");
        element.classList.add("border-red-500", "focus:ring-red-500", "text-red-500");
    }
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
