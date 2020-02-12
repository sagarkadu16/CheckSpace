import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import Booking from './Components/Booking'
import OrderConfirm from './Components/OrderConfirm'
import Orders from './Components/Orders'


export default function Routes() {
    return (
        <div>
            <Switch> 
                <Route exact path='/login' render={(props) => <Login {...props}/>} />
                <Route exact path='/register' render={(props) => <Register {...props} />} />
                <Route exact path='/rooms/:id/booking' render={(props) => <Booking {...props} />} />
                <Route exact path='/orderConfirmed' render={(props) => <OrderConfirm {...props} />} />
                <Route exact path='/orders' render={() => <Orders />} />
                <Route exact path='/' render={(props) => <Home {...props}/>} />
                <Route path='*' render={() => <NotFound />}  />
            </Switch>
        </div>
    )
}
