import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';// Ensure this path is correct

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirect to the home page after logout
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto"> {/* Changed to `me-auto` to push everything else to the right */}
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" style={{ color: 'white',fontWeight:'bold',marginLeft:'20px'}}>Browse Students</Link>
                    </li>
                    {isAuthenticated && user && (
                        <>
                            <li className="nav-item s">
                                <Link className="nav-link" to={`/edit-profile/${user}`} style={{ color: 'white',marginRight:'30px'}}>Edit Profile</Link> {/* Assuming `user.id` is the correct property */}
                            </li>
                            <li className="nav-item">
                                <button onClick={handleLogout} className="btn btn-outline-danger my-2 my-sm-0" type="button">Log out</button>
                            </li>
                        </>
                    )}
                </ul>
                <ul className="navbar-nav ms-auto"> {/* Use `ms-auto` to align these nav items to the right */}
                    {!isAuthenticated && (
                        <>
                            <li className="nav-item center">
                                <Link className="nav-link btn btn-outline-success my-2 my-sm-0" to="/signup" style={{ color: 'white',marginRight:'20px' }}>Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-success my-2 my-sm-0" to="/login" style={{marginRight:'15px',color:'white'}}>Log In</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
