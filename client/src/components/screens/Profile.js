import React, {useEffect,useState,useContext} from 'react';
import {UserContext} from '../../App'

const Profile= () => {
    const [pics, setPics] = useState([])
    const {state, dispatch} = useContext(UserContext)
    useEffect(() => {
        fetch('/myposts', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then(res => res.json())
        .then((result) => {
            setPics(result.mypost)
        })
    }, [])
    return(
       <div style={{
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
                   src={state ? state.pic : "loading"} />
               </div>
               <div>
                   <h4>{state ? state.name : "loading"}</h4>
                   <h5>{state ? state.email : "loading"}</h5>
                   <div style={{display: "flex", width: "108%", justifyContent:"space-between"}} >
                       <h6>{pics.length} posts</h6>
                       <h6>{state ? state.followers.length:"0"} followers</h6>
                       <h6>{state ? state.following.length:"0"} following</h6>
                   </div>
               </div>
           </div>
           <div className="gallery">
                {
                    pics.map(item => {
                        return(
                            <img className="item" src={item.photo} alt={item.title} key={item._id} />
                        )
                    })
                }
           </div>
       </div>
    )
}
export default Profile;