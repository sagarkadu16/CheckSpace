import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../Redux/action'

function Navbar(props) {

    const handleLogout = () =>{
        props.logout()
    }

    return (
        <div className={style.box}>
            <nav className={`navbar navbar-expand-lg shadow-sm navbar-light ${style.back} mb-5`} >
            <Link className="navbar-brand" to='/' >CheckSpace</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${style.ele}`}>
                    <Link className="nav-link m-1" to='#' >
                        Token:{props.token}
                    </Link>
                </li>
               {props.isLoggedIn && <li className={`nav-item ${style.ele}`}>
                    <Link className="nav-link" to='/orders' >
                        <button className='nav-links btn btn-success shadow-sm'>Orders</button>
                    </Link>
                </li>}
               {props.isLoggedIn && <li className={`nav-item ${style.ele}`}>
                    <Link className="nav-link" to='#' >
                         <button className='nav-links btn btn-info shadow-sm' onClick={handleLogout}>Logout</button>
                    </Link>
                </li>}
                </ul>
            </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        token:state.currentToken,
        isLoggedIn:state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        logout : () => dispatch(logout())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navbar)