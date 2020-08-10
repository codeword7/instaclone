import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../../App'
import M from 'materialize-css';

const Login= () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((res) => res.json())
        .then((data) => {
            if(data.error){
                M.toast({html: data.error, classes: "#c62828 red darken-3"})
            }else {
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type: 'USER', payload: data.user})
                M.toast({html: "Logged in success", classes: "#43a047 green darken-1"})
                history.push('/')
            }
        })
        .catch(err => {
            console.log(err)
        })
}
    return(
        <div className="mycard">
            <div className="card auth-card">
                <h2>Stoned-Gram</h2>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light" onClick={() => PostData()} >
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