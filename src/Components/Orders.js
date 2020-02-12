import React from 'react'
import { connect } from 'react-redux'

function Orders(props) {
    return (
        <div className='container p-2'>  
            {
                props.bookedRooms.map(room => 
                        <div key={room.bookingId} className='row my-2 border bg-light shadow-sm'>
                            <div className='col-md-4 col-12 m-1 p-2'>
                                <img src={room.img} className='rounded img-fluid' alt='placeholder'></img>
                            </div>
                            <div className='col-md-3 p-2 col-12'>
                                <p><strong>Booking Id:</strong> {room.bookingId}</p>
                                <p> <strong>Token Id:</strong> {room.token}</p>
                                <p>Name: {room.name}</p>
                                <p>Price (₹) /day:: {room.price}</p>
                                <p>Capacity: {room.capacity}</p>
                                <p>Floor: {room.floor}</p>
                            </div>
                            <div className='col-md-3 p-2 col-12'>
                                <p>From: {room.From}</p>
                                <p>To:{room.To}</p>
                                <p>status: {room.status}</p>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        bookedRooms : state.bookedRooms,
        token:state.currentToken
    }
}

export default connect(mapStateToProps)(Orders)