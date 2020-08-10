import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';

const SignUp= () => {
    const history = useHistory()
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[image, setImage] = useState("")
    const[url, setUrl] = useState(undefined)

    useEffect(() => {
        if(url){
            uploadFields()
        }
    }, [url])

    const uploadPic = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "codeword7")
        fetch(" https://api.cloudinary.com/v1_1/codeword7/image/upload", {
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const uploadFields = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password,
                pic: url
            })
        }).then((res) => res.json())
        .then((data) => {
            if(data.error){
                M.toast({html: data.error, classes: "#c62828 red darken-3"})
            }else {
                M.toast({html: data.message, classes: "#43a047 green darken-1"})
                history.push('/login')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    const PostData = () => {
        if(image){
            uploadPic()
        }else {
            uploadFields()
        }
}
    return(
        <div className="mycard">
            <div className="card auth-card">
                <h2>Stoned-Gram</h2>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Upload image</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <button className="btn waves-effect waves-light" onClick={() => PostData()} >
                    Sign Up
                </button>
                <h5>
                    <Link to="/login" >Already have an account?</Link>
                </h5>
            </div>
        </div>
    )
}
export default SignUp;