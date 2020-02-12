import React, { Component } from 'react'
import {connect} from 'react-redux'
import { registerUser } from '../../Redux/action'
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            desc:'',
            email:'',
            mobile:''
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
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            description:this.state.desc,
            username: this.state.username,
            password: this.state.password
        }
        this.props.saveUser(info)
        console.log(this.props.isRegistered)
    }


    render() {  
            return (
                <div className='container w-25'>
                    <p className='text-danger'>{this.props.warningText}</p>
                    {this.props.isRegistered && <div className="alert alert-success" role="alert">
                        User Registered Successfully!
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">name:</label>
                            <input type="text" className="form-control" name='name' value={this.state.value} onChange={this.handleChange} id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">email:</label>
                            <input type="email" className="form-control" name='email' value={this.state.value} onChange={this.handleChange} id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">mobile:</label>
                            <input type="number" className="form-control" name='mobile' value={this.state.value} onChange={this.handleChange} id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" name='username' value={this.state.value} onChange={this.handleChange} id="username" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' value={this.state.value} onChange={this.handleChange}  className="form-control" id="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">description</label>
                            <input type="textarea" name='desc' value={this.state.value} onChange={this.handleChange}  className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <Link to='/login'>Login Page</Link>
                </div>
            )
        
    }
}

const mapStateToProps = state => {
    return {
        isRegistered : state.isRegisterSuccess,
        warningText : state.warningText
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        saveUser: inp => dispatch(registerUser(inp))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)