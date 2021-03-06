import React, { Fragment } from "react";

const Search = ({onInputChange}) => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-light bg-light">
                            <div className="container-fluid">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onInputChange} />
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Search;