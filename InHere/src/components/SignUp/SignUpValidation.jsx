function SignUpValidation (email, username, password, salt){
    const errors = {};

    // TODO: add validation for email, username, and password requirements

    if (email === '')
    {
        errors.email = " Email should not be empty!";
    }
    else
    {
        errors.email = "";
    }

    if (username === '')
    {
        errors.username = " Username should not be empty!";
    }
    else
    {
        errors.username = "";
    }

    if (password === '')
    {
        errors.password = " Password should not be empty!";
    }
    else
    {
        errors.password = "";
    }

    if (salt === '')
    {
        errors.salt = " Salt should not be empty!";
    }
    else
    {
        errors.salt = "";
    }

    return errors;
}


export default SignUpValidation;