import React from 'react';

const Home= () => {
    return(
        <div className="home">
            <div className="card home-card">
                <h5>Ramesh</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1491485066275-97da4e681cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}} >favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input ype="text" placeholder="add a comment" />
                </div>
            </div>
        </div>
    )
}
export default Home;