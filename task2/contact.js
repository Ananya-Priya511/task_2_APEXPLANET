document.querySelector("#contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  if (!name || !email.includes("@")) {
    alert("Please enter a valid name and email.");
  } else {
    alert("Form submitted successfully!");
  }
});