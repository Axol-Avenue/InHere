function LoginValidation (username, password){
    const errors = {};

    if (username === '')
    {
        errors.username = " Username should not be empty!";
    }

    if (password === '')
    {
        errors.password = " Password should not be empty!";
    }

    return errors;
}


export default LoginValidation;