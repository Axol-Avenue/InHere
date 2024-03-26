function SignUpValidation (email, username, password){
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

    return errors;
}


export default SignUpValidation;