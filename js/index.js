document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addItemToList();
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });

function addItemToList() {
  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const mail = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  const rePassword = document.getElementById("rePassword").value;

  if (name && phoneNumber && mail && password && rePassword) {
    if (password !== rePassword) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = {
      name,
      phoneNumber,
      mail,
      password,
    };

    let storedRegistration =
      JSON.parse(localStorage.getItem("storedRegistration")) || [];
    storedRegistration.push(newUser);

    localStorage.setItem(
      "storedRegistration",
      JSON.stringify(storedRegistration)
    );

    alert("Registration successful!");
    clearRegistrationForm();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function clearRegistrationForm() {
  document.getElementById("name").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("password").value = "";
  document.getElementById("rePassword").value = "";
}

function login() {
  const loginType = document.querySelector(
    'input[name="login-type"]:checked'
  ).value;
  const mail = document.getElementById("loginMail").value;
  const password = document.getElementById("loginPassword").value;

  let storedRegistration =
    JSON.parse(localStorage.getItem("storedRegistration")) || [];

  if (loginType === "admin") {
    if (mail === "admin@gmail.com" && password === "12345") {
      alert("Admin login successful!");
      clearLoginForm();
      window.location.href = "admin_burger.html"; // Redirect to admin_burger.html
    } else {
      alert("Admin credentials are incorrect.");
    }
  } else {
    const user = storedRegistration.find(
      (user) => user.mail === mail && user.password === password
    );

    if (user) {
      alert("User login successful!");
      clearLoginForm();
      window.location.href = "Menu_Burger.html"; // Redirect to Menu_Burger.html
    } else {
      alert("Invalid mail or password.");
    }
  }
}

function clearLoginForm() {
  document.getElementById("loginMail").value = "";
  document.getElementById("loginPassword").value = "";
}
