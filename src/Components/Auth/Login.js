import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { loginUser} from '../../Redux/action'
import { connect } from 'react-redux'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        let info = {
            "username": this.state.username,
            "password": this.state.password
        }
        console.log(info)
        this.props.loginUser(info)
    }

    render() {
        if(this.props.isLoggedIn){
            return <Redirect to='/home' />
        }else{
            return (
                <div className='container w-25'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" name='username' value={this.state.username} onChange={this.handleChange} id="username" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' value={this.state.password} onChange={this.handleChange}  className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <Link to='/register'>Register</Link>
                </div>
            )
        }
    }
}

const mapStateToProps = state =>{
    return{
        isLoggedIn:state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        loginUser : inp => dispatch(loginUser(inp)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)