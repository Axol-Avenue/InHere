async function LoginAuthentication (username, password){
    if (username !== '' && password !== '')
    {
        // TODO: add actual authentication
        if (username === 'admin' && password === 'admin')
        {
            return true; // authentication successful
        }
        else
        {
            throw new Error('Invalid Credentials');
        }
    }
    else
    {
        throw new Error('Username and Password are required');
    }
}


export default LoginAuthentication;