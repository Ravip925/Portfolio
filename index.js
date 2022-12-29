function sendEmail() {
  var form = document.getElementById("form");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (form.checkValidity()) {
    // The form is valid, so send the email
    var email = document.getElementById("email").value;

    if (email.match(mailformat)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
    
}
}

const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

document.onclick = function (e) {
  if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    sidebar.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};
