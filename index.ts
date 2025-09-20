// Dropdown boxes functionality
function toggleDropdown(dropdownId: string, arrowId: string, btnId: string): void {
    const dropdown = document.getElementById(dropdownId);
    const arrow = document.getElementById(arrowId);
    const btn = document.getElementById(btnId);

    if (dropdown) dropdown.classList.toggle("hidden");
    if (arrow) arrow.classList.toggle("rotate-180");
    if (btn) btn.classList.toggle("border-b-2");
}
document.addEventListener("DOMContentLoaded", () => {
    const productsBtn = document.getElementById("productsBtn");
    if (productsBtn) {
        productsBtn.addEventListener("click", () => {
            toggleDropdown("productsDropdown", "productsArrow", "productsBtn")
        });
    }
})

// Sign-Up Form functionality
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm") as HTMLFormElement;
    const formText = document.getElementById("formText") as HTMLDivElement;
    const successText = document.getElementById("successText") as HTMLDivElement;
  
    if (!form) return;
  
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
  
      let valid = true;
      formText.classList.add("hidden");
      successText.classList.add("hidden");
  
      // Grab inputs
      const inputs = form.querySelectorAll("input");
  
      inputs.forEach((input) => {
        const element = input as HTMLInputElement;
        element.classList.remove(
          "border-red-500",
          "focus:ring-red-500",
          "text-red-500"
        );
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
  
        // Phone validation
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
      alert("✅ Form submitted successfully!");
      form.reset();
    });
  
    function markInvalid(element: HTMLInputElement) {
      element.classList.remove("border-black", "focus:ring-[#0360E6]", "text-black");
      element.classList.add("border-red-500", "focus:ring-red-500", "text-red-500");
    }
  
    function isValidEmail(email: string): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });