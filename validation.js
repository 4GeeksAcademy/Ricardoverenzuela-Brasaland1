document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  if (!form) return;

  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const location = document.getElementById("location");
  const date = document.getElementById("date");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Validación Nombre (mínimo 3 caracteres)
    if (fullName.value.trim().length < 3) {
      showError("full-name-error");
      isValid = false;
    } else {
      hideError("full-name-error");
    }

    // Validación Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError("email-error");
      isValid = false;
    } else {
      hideError("email-error");
    }

    // Validación Teléfono (entre 7 y 15 dígitos)
    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(phone.value.trim())) {
      showError("phone-error");
      isValid = false;
    } else {
      hideError("phone-error");
    }

    // Validación Sede
    if (location.value === "") {
      showError("location-error");
      isValid = false;
    } else {
      hideError("location-error");
    }

    // Validación Fecha
    if (date.value === "") {
      showError("date-error");
      isValid = false;
    } else {
      hideError("date-error");
    }

    // Si todo es válido
    if (isValid) {
      alert("Bienvenido al club Brasaland🔥");
      form.reset();
    }
  });

  function showError(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hidden");
  }

  function hideError(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  }
});
