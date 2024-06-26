function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  let isValid = true;
  if (name.length <= 1) {
    document.getElementById("errorName").value = "Nome inválido.";
    isValid = false;
  } else {
    document.getElementById("errorName").value = "";
    isValid = true;
  }

  if (!validateEmail(email)) {
    document.getElementById("errorEmail").value = "E-mail inválido.";
    isValid = false;
  } else {
    document.getElementById("errorEmail").value = "";
    isValid = true;
  }

  if (message.length < 1) {
    document.getElementById("errorMessage").value = "Digite uma mensagem.";
    isValid = false;
  } else {
    document.getElementById("errorMessage").value = "";
    isValid = true;
  }

  if (isValid) sendValidateEmail(name, email, message);
}

function sendValidateEmail(name, email, message) {
  const mailtoLink = `mailto: fernando.angeli88@gmail.com?subject=${encodeURIComponent(
    `Contato via página WinTech - ${name}`
  )}&body=${encodeURIComponent(`Mensagem de: ${name} - ${email}\n${message}`)}`;
  document.getElementById("emailForm").reset();
  window.location.reload();
  window.location.href = mailtoLink;
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
