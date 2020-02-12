import React, { Component } from 'react'
import { connect } from 'react-redux'
import {checkAvailability} from '../Redux/action'

class Search extends Component {
    constructor(props){
        super(props)
            this.state ={
                start:'',
                end:''
            }
        
    }

    handleStart = e =>{
        this.setState({
            start : e.target.valueAsNumber,
        })
    }

    handleEnd = e =>{
        this.setState({
            end : e.target.valueAsNumber
        })
    }

    handleClick = () =>{
        // console.log(this.state.start,this.state.end)
        this.props.checkAvailability(this.state.start,this.state.end)
    }

    render(){
        return (
            <div className='my-2  bg-light p-2'>
                Search By Date:
                <div className='d-flex my-2'>
                        Start Date:
                        <input id='start' min="2020-02-11" max="2020-02-29" onChange={this.handleStart} type='date' className='mx-2'></input>
                    
                        End Date:
                        <input id='end'  min="2020-02-11" max="2020-02-29" onChange={this.handleEnd} type='date' className='mx-2'></input>
                    
                        <button className='btn btn-info btn-sm' onClick={this.handleClick}>Check</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        checkAvailability: (startArr,endArr) => dispatch(checkAvailability(startArr,endArr))
    }
}


export default connect(null,mapDispatchToProps)(Search)