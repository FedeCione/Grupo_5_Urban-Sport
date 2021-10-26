
const visibilityBtn = document.getElementById('visibilityBtn')

visibilityBtn.addEventListener('click', showPass)

function showPass() {
    var password = document.getElementById("password");
    var icon = document.querySelector('.fa-eye')
    if (password.type === "password") {
      password.type = "text";
      icon.classList.toggle('fa-eye-slash')
      icon.style.color = "grey"
    } else {
      password.type = "password";
      icon.classList.toggle('fa-eye-slash')
    }
  }