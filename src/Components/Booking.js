import React, { Component } from 'react'
import { connect } from 'react-redux'
import {confirmOrder} from '../Redux/action'
const shortid = require('shortid')

class Booking extends Component {
    constructor(props){
        super(props)
        this.start = new Date(this.props.start)
        this.end = new Date(this.props.end)
        this.state = {
            bookingId : shortid.generate(),
            start:this.start.toDateString(),
            end:this.end.toDateString()
        }
    }

    handleConfirm = (id) => {
        let confirmedOrder = {
            ...this.props.room,
            token:this.props.token,
            bookingId:this.state.bookingId,
            From:this.state.start,
            To:this.state.end,
            status: 'Booked'
        }

        this.props.confirmOrder(confirmedOrder,id)
        this.props.history.push('/orderConfirmed')
    }


    render(){
        

        return (
            <div className='container bg-light p-2' key={this.props.room.id}>
                <div className='row'>
                    <div className='col-md-6 text-center col-12'>
                        <img src ={this.props.room.img} alt='placeholder' className='img-fluid'></img>
                    </div>
                    <div className='col-md-6 col-12'>
                        <h2>Name: {this.props.room.name}</h2>
                        <h5>Booking Id - {this.state.bookingId}</h5>
                        <h5>Token details - {this.props.token}</h5>
                        <p>Floor:{this.props.room.floor}</p>
                        <p>Capacity:{this.props.room.capacity}</p>
                        <p>Price (₹) /day:{this.props.room.price}</p>
                        <p>From:{this.state.start}<span className='mx-2'>To:{this.state.end}</span></p>
                        <p>Status: {this.props.room.status}</p>
                        <button className='btn btn-primary' onClick={()=>this.handleConfirm(this.props.room.id)}>Confirm</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        room: state.currentRoom,
        start: state.start,
        end:state.end,
        token:state.currentToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        confirmOrder :( inp,id) => dispatch(confirmOrder(inp,id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Booking)
