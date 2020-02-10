import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function Navbar(props) {
    return (
        <div className={style.box}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/home' >CheckSpace</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${style.ele}`}>
                    <Link className="nav-link" to='/home' >
                        <button className='btn btn-danger shadow-sm'>Home</button>
                    </Link>
                </li>
                <li className={`nav-item ${style.ele}`}>
                    <Link className="nav-link" to='/orders' >
                        <button className='btn btn-success shadow-sm'>Orders</button>
                    </Link>
                </li>
                <li className={`nav-item ${style.ele}`}>
                    <Link className="nav-link" to='/orders' >
                        Token:{props.token}
                    </Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        token:state.currentToken
    }
}

export default connect(mapStateToProps)(Navbar)