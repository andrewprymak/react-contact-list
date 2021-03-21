import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Search component
// import Search from "../Search/search";

const Header = ({onInputChange}) => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                            <Link to="/" className="navbar-brand">Contact List</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/add-contact">Add new contact</Link>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <Search /> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-light bg-light">
                            <div className="container-fluid">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onInputChange} />
                                    {/* <button className="btn btn-success" type="submit">Search</button> */}
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}
export default Header;