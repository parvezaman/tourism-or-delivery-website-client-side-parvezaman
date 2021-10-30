import React from 'react';
import useAuth from '../../../hooks/useAuth'

const Login = () => {
    const {signInUsingGoogle} = useAuth();


    return (
        <div className="text-center mt-5">
            <h3>Lets login</h3>
            <br /><br />
            <button onClick={signInUsingGoogle} className="btn btn-warning">Log in with Google</button>
        </div>
    );
};

export default Login;