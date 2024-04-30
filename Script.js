<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Logo</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Services</a>
            <a href="#">Login</a>
        </nav>
    </header>
    <div class="Form-box">
        <form class="Login-form">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" required>
                <label>Email</label>
                <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div class="input-box">
                <input type="password" required>
                <label>Password</label>
                <ion-icon name="lock-closed-outline"></ion-icon>
            </div>
            <div class="checkbox">
                <span>
                    <input type="checkbox" id="login-checkbox">
                    <label for="login-checkbox">Remember Me</label>
                </span>
                <h5>Forget password ?</h5>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
            <h5 class="Register-btn">Dont have an account ? Register</h5>
        </form>
        <form class="Register-form">
            <h1>Register</h1>
            <div class="input-box">
                <input type="text" required>
                <label>Username</label>
                <ion-icon name="person-outline"></ion-icon>
            </div>
            <div class="input-box">
                <input type="text" required>
                <label>Email</label>
                <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div class="input-box">
                <input type="password" required>
                <label>Password</label>
                <ion-icon name="lock-closed-outline"></ion-icon>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="register-checkbox">
                <label for="register-checkbox">I agree to the terms & conditions</label>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
            <h5 class="Login-btn">Register before ? Login</h5>
        </form>
    </div>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="script.js"></script>
</body>
</html>