const loginForm = document.getElementById("loginForm");

const role = document.getElementById("role");

const username = document.getElementById("username");

const password = document.getElementById("password");

const errorMessage = document.getElementById("errorMessage");

const togglePassword =
    document.getElementById("togglePassword");

const forgotPassword =
    document.getElementById("forgotPassword");


// =====================================
// SHOW / HIDE PASSWORD
// =====================================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";

        togglePassword.textContent = "👁";

    }

});


// =====================================
// LOGIN
// =====================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    errorMessage.textContent = "";


    const selectedRole = role.value;

    const user = username.value.trim();

    const pass = password.value.trim();


    // Validate Role

    if (selectedRole === "") {

        errorMessage.textContent =
            "Please select your role.";

        return;
    }


    // Validate Username

    if (user === "") {

        errorMessage.textContent =
            "Please enter username, email or phone.";

        return;
    }


    // Validate Password

    if (pass === "") {

        errorMessage.textContent =
            "Please enter your password.";

        return;
    }


    if (pass.length < 6) {

        errorMessage.textContent =
            "Password must contain at least 6 characters.";

        return;
    }


    // =================================
    // DEMO LOGIN
    // =================================

    console.log("Role:", selectedRole);

    console.log("Username:", user);

    console.log("Password:", pass);


    alert(
        "Login successful!\n\n" +
        "Role: " +
        selectedRole
    );


    // Later replace this with:
    // API call to Spring Boot backend
    //
    // fetch("http://localhost:8080/api/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         role: selectedRole,
    //         username: user,
    //         password: pass
    //     })
    // });


});


// =====================================
// FORGOT PASSWORD
// =====================================

forgotPassword.addEventListener("click", function () {

    const user = username.value.trim();

    if (user === "") {

        alert(
            "Enter your email or phone number first."
        );

        username.focus();

        return;
    }


    alert(
        "Password recovery OTP will be sent to:\n" +
        user
    );

});