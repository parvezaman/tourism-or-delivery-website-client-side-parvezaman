import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin =()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
        // .finally(()=> setIsLoading(false));
    }


    return (
        <div className="text-center mt-5">
            <h3>Lets login</h3>
            <br /><br />
            <button onClick={handleGoogleLogin} className="btn btn-warning">Log in with Google</button>
        </div>
    );
};

export default Login;