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
                <h1 className='text-success'>Congratulations !!!</h1>
                <p className='text-success'>Your Order is confirmed</p>
            </div>
        )
    }
}
