function SignUpValidation (email, username, password){
    const errors = {};

    // Regex initialization stuff
    const validEmail = new RegExp(
        '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|.(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    );
    const validUsername = new RegExp(
        '.{6,}'
    );
    const validPassword = new RegExp(
        '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'
    );

    // Email validation checks
    if (email === '') {
        errors.email = " Email should not be empty!";
    }
    else if (!validEmail.test(email)) {
        errors.email = " Invalid email address!";
    }
    else {
        errors.email = "";
    }

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


export default SignUpValidation;