import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import style from './list.module.css'

class List extends Component {
        constructor(props){
            super(props)
        }
        render(){
            console.log(this.props.displayData)
            return(
                        this.props.rooms.map(room =>
                            <div key={room.id} className="card w-75 m-2 shadow " style={{width: "8rem"}}>
                                <img src="https://via.placeholder.com/300C/O https://placeholder.com/ " className={`card-img-top img-fluid ${style.img}`} alt="placeholder" />
                                <div className="card-body">
                                <h5 className="card-title">Title:{room.name}</h5>
                                <h5 className="card-title">Floor:{room.floor}</h5>
                                <h5 className="card-title">Price:{room.price}</h5>
                                <h5 className="card-title">Capacity:{room.capacity}</h5>
                                <h5 className="card-title">Capacity:{(room.status)?'Available':'Not Available'}</h5>
                                <Link to='#' className="btn btn-primary">Book</Link>
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

export default connect(mapStateToProps)(List)