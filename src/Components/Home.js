import React from 'react'
import {connect} from 'react-redux'
import List from './List'
import {filterPrice,filterFloor} from '../Redux/action'


class Home extends React.Component {
   constructor(props){
       super(props)
       this.state = {
         price:'none',
         floor:'none'
       }
   }

   handleChange = e =>{
       this.setState({
           [e.target.name] : e.target.value
       })
   }

   handleClick = () =>{
        this.props.filterFloor(this.state.floor)
        this.props.filterPrice(this.state.price)
   }

   render(){
        return (
            <div className='container'>
                <div className='d-flex'>
                    Search By:
                    <button className='btn btn-success btn-sm mx-2'>Available</button>
                    Filter By: 
                    <select className='mx-2' name='price' value={this.state.price} onChange={this.handleChange}>
                        <option value='none'>Price</option>
                        <option value='lotohi'>Low To High</option>
                        <option value='hitolo'>High To Low</option>
                    </select>
                    <select className='mx-2' name='floor' value={this.state.floor} onChange={this.handleChange}>
                        <option value='none'>Floor</option>
                        <option value='1'>First</option>
                        <option value='2'>Second</option>
                        <option value='3'>Third</option>
                        <option value='4'>Fourth</option>
                    </select>
                    <button className='btn btn-primary btn-sm' onClick={this.handleClick}>Submit</button>
                </div>
                <div className='w-50 '>
                    <List />
                </div>
            </div>
        )
   }
}

const mapDispatchToProps = dispatch =>{
    return {
        filterPrice: value => dispatch(filterPrice(value)),
        filterFloor: value => dispatch(filterFloor(value))
    }
}

export default connect(null,mapDispatchToProps)(Home)  
