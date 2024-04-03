function LoginValidation (username, password){
    const errors = {};

    const validUsername = new RegExp(
        '.{6,}'
    );
    const validPassword = new RegExp(
        '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'
    );

    // Username validation checks
    if (username === '') {
        errors.username = " Username should not be empty!";
    }
    else if (!validUsername.test(username)) {
        errors.username = " Invalid username, please make sure it is longer than five letters!"
    }
    else {
        errors.username = "";
    }

    // Password validation checks
    if (password === '') {
        errors.password = " Password should not be empty!";
    }
    else if (!validPassword.test(password)) {
        errors.password = " Invalid Password, please make sure it is longer than five letters and has a number!"
    }
    else {
        errors.password = "";
    }

    return errors;
}


export default LoginValidation;