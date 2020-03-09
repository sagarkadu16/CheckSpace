import React, { Component } from 'react'

export default class OrderConfirm extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        this.x = setTimeout(
                () => this.home()
        ,6000)
    }

    home = () =>{
        this.props.history.push('/')
    }

    componentWillUnmount(){
        clearTimeout(this.x)
    }

    render(){
        return (
            <div className='text-center'>
                <h1 className='text-success'>Booking is confirmed !!!</h1>
                <h5 className='text-success'> Thank you for booking with 'CheckSpace'</h5>
                <p className='text-success'> Redirecting you to meeting room list</p>
            </div>
        )
    }
}
