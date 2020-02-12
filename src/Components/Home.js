import React from 'react'
import {connect} from 'react-redux'
import List from './List'
import {filterPrice,filterFloor} from '../Redux/action'
import { Redirect } from 'react-router-dom'
import Search from './Search'


class Home extends React.Component {
   constructor(props){
       super(props)
       this.state = {
         price:'none',
         floor:'none'
       }
   }

   handlePriceChange = e =>{
       this.setState({
           [e.target.name] : e.target.value
       })
       this.props.filterPrice(e.target.value)
   }

   handleFloorChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
        this.props.filterFloor(e.target.value)
   }

   render(){
       if(this.props.isLoggedIn){
        return (
            <div className='container'>
                <div className='d-flex my-2 bg-light p-4'>
                    Filter By: 
                    <select className='mx-2' name='price' value={this.state.price} onChange={this.handlePriceChange}>
                        <option value='none'>Price</option>
                        <option value='lotohi'>Low To High</option>
                        <option value='hitolo'>High To Low</option>
                    </select>
                    <select className='mx-2' name='floor' value={this.state.floor} onChange={this.handleFloorChange}>
                        <option value='none'>All Floor</option>
                        <option value='1'>First</option>
                        <option value='2'>Second</option>
                        <option value='3'>Third</option>
                        <option value='4'>Fourth</option>   
                    </select>
                </div>
                <Search />
                <div className='border d-flex flex-wrap justify-content-around'>
                    <List {...this.props} />
                </div>
            </div>
        )
       }else{
            return <Redirect to='/login' />
       }
   }
}

const mapStateToProps = state => {
    return {
        isLoggedIn:state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        filterPrice: value => dispatch(filterPrice(value)),
        filterFloor: value => dispatch(filterFloor(value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)  
