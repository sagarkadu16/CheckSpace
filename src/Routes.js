import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Home from './Components/Home'


export default function Routes() {
    return (
        <div>
            <Switch> 
                <Route path='/home' render={(props) => <Home {...props}/>} />
                <Route path='/login' render={(props) => <Login {...props}/>} />
                <Route path='/register' render={(props) => <Register {...props} />} />
                <Route path='/'></Route>
            </Switch>
        </div>
    )
}
