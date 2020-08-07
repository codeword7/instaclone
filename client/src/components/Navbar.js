import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {UserContext} from '../App'

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);
  const renderList = () => {
    if(state){
      return [
            <li key="profile"><Link to="/profile">Profile</Link></li>,
            <li key="createpost"><Link to="/create">Create Post</Link></li>
      ]
    }else{
      return [
            <li key="login"><Link to="/login">Login</Link></li>,
            <li key="signup"><Link to="/signup">Signup</Link></li>
      ]
    }
  }
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to={state ? "/" : "/login"} className="brand-logo left">Stoned-Gram</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;