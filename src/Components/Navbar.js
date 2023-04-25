import React from "react";
import { auth } from "../firebaseConfig";
import { Link, useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";

const Navbar = () => {
const navigator = useNavigate();
  const signOutfun = () =>{
    signOut(auth).then(() => {
      navigator("/auth/register")
    }).catch((error) => {
      alert("error"+error)
    });
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-light navbar-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Musaif
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             {
              !auth.currentUser ?
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/auth/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/auth/login">
                  Login
                </Link>
              </li> 
              
              </> :<button onClick={signOutfun} className="btn-sm m2 p2">signout</button> }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
