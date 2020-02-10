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
    console.log('isregister success')
    return {
        type:register_success
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
    console.log(res)
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



