import React from 'react';
import {Link} from 'react-router-dom';

const Login= () => {
    return(
        <div className="mycard">
            <div className="card auth-card">
                <h2>Stoned-Gram</h2>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn waves-effect waves-light">
                    Login
                </button>
                <h5>
                    <Link to="/signup" >Don't have an account?</Link>
                </h5>
            </div>
        </div>
    )
}
export default Login;