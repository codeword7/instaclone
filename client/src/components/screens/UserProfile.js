import React, {useEffect,useState,useContext} from 'react';
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'

const Profile= () => {
    const [userProfile, setProfile] = useState(null)
    const {state, dispatch} = useContext(UserContext)
    const {userid} = useParams()
    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then(res => res.json())
        .then((result) => {
            setProfile(result)
        })
    }, [])
    return(
        <>
            {
                userProfile
                 ? <div style={{
                        maxWidth: "550px",
                        margin: "0px auto"
                    }} >
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            margin: "18px 0px",
                            borderBottom: "1px solid grey"
                        }}>
                            <div>
                                <img style={{width: "160px", height:"160px", borderRadius:"80px"}}
                                src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                            </div>
                            <div>
                                <h4>{userProfile.user.name}</h4>
                                <h4>{userProfile.user.email}</h4>
                                <div style={{display: "flex", width: "108%", justifyContent:"space-between"}} >
                                    <h6>{userProfile.posts.length} posts</h6>
                                    <h6>20 followers</h6>
                                    <h6>12 following</h6>
                                </div>
                            </div>
                        </div>
                        <div className="gallery">
                                {
                                    userProfile.posts.map(item => {
                                        return(
                                            <img className="item" src={item.photo} alt={item.title} key={item._id} />
                                        )
                                    })
                                }
                        </div>
                    </div>
                 : <h2>loading....</h2>
            }
       </>
    )
}
export default Profile;