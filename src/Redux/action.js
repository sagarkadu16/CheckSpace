import Axios from "axios"

export const register_success = 'registerSuccess'


//register user
export const registerUser = inp =>{
    console.log(inp)
    return  dispatch => {
        return Axios.post('http://localhost:8080/auth/register',inp)
                .then(res => dispatch(registerSuccess(res)))
                .catch(err => console.log(err))
                .finally(res => console.log('user registered'))
    }
}

export const registerSuccess = (res) =>{
    console.log('register call success',res)
    return {
        type:register_success,
        res
    }
}

//Login User
export const login_success = 'loginSuccess'

export const loginUser = inp =>{
    console.log(inp)
    return dispatch =>{
        return Axios.post('http://localhost:8080/auth/login',inp)
            .then(res => dispatch(loginSuccess(res)))
            .catch(err => console.log(err))
            .finally(res => console.log('login success'))
    }
}

export const loginSuccess = res =>{
    // console.log(res)
    return {
        type:login_success,
        res
    }
}


//-------- Filtering floor and price

export const filter_price = 'filter_price'

export const filterPrice = value =>{
    return {
        type:filter_price,
        value
    }
}

export const filter_floor = 'filter_floor'

export const filterFloor = value =>{
    return {
        type : filter_floor,
        value
    }
}


//------------- check availability according to date
export const check_available = 'check_available'

export const checkAvailability = (start,end) => {
    return {
        type:check_available,
        start,end
    }
}

export const book_room = 'book_room'

export const bookRoom = id => {
    return{
        type: book_room,
        id
    }
}


export const confirm_order = 'confirm_order'

export const confirmOrder =( pack,id) =>{
    return {
        type:confirm_order,
        pack,id
    }
}


export const user_logout = 'user_logout'

export const logout = () =>{
    return {
        type:user_logout
    }
}