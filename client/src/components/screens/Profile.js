import React from 'react';

const Profile= () => {
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
                   src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
               </div>
               <div>
                   <h4>Ramesh Verma</h4>
                   <div style={{display: "flex", width: "108%", justifyContent:"space-between"}} >
                       <h6>30 posts</h6>
                       <h6>20 followers</h6>
                       <h6>12 following</h6>
                   </div>
               </div>
           </div>
           <div className="gallery">
            <img className="item" src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            <img className="item" src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            <img className="item" src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            <img className="item" src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            <img className="item" src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            <img className="item" src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
           </div>
       </div>
    )
}
export default Profile;