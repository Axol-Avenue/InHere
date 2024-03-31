function LoginValidation (username, password){
    const errors = {};

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


export default LoginValidation;