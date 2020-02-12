import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './list.module.css'
import {bookRoom} from '../Redux/action'

class List extends Component {
        
        handleBooking = room =>{
            this.props.bookRoom(room.id)
            this.props.history.push(`/rooms/${room.id}/booking`)
        }

        render(){
            return(
                        this.props.rooms.map(room =>
                            <div key={`${Math.random()}${room.id}`} className="card m-2 shadow-sm " style={{width: "20rem" ,height:"28rem"}}>
                                <img src={room.img} className={`card-img-top img-fluid ${style.img}`} alt="placeholder" />
                                <div className="card-body">
                                    <p className="m-1">Title:{room.name}</p>
                                    <p className="m-1">Floor:{room.floor} </p>
                                    <p className="m-1">Price (₹) /day: {room.price}</p>
                                    <p className="m-1">Capacity:{room.capacity}</p>
                                    {/* <li className={`list-group-item ${(room.status)?'text-success':'text-danger'}`}>{(room.status)?'Available':'Booked'}</li> */}
                                    <button  className="btn btn-primary m-1" onClick={()=>this.handleBooking(room)}>Book</button>
                                </div>
                            </div>
                    )
            )
        }
}

const mapStateToProps = state =>{
    return {
        rooms : state.displayData
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        bookRoom: value => dispatch(bookRoom(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)