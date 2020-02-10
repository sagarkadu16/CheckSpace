import { register_success, login_success, filter_floor, filter_price } from "./action"


const initialState = {
    data:[
        {  
            id:1,
            floor:1,
            name:'hercules',
            capacity:4,
            price:1000,
            status:true
        },
        {
            id:2,
            floor:1,
            name:'james',
            capacity:5,
            price:1200,
            status:true
        },
        {
            id:3,
            floor:2,
            name:'Gather',
            capacity:3,
            price:1300,
            status:true
        },
        {
            id:4,
            floor:3,
            name:'Ninja',
            capacity:4,
            price:900,
            status:true
        },
        {
            id:5,
            floor:4,
            name:'Silence',
            capacity:10,
            price:5000,
            status:true
        }
    ],
    isLoggedIn:false,
    isRegisterSuccess:false,
    currentToken:'',
    currentUser:'',
    displayData:[]
}


const reducer = (state = initialState, action) =>{
    console.log('action.type',action.type)
    switch(action.type){
        case register_success:
            console.log('reached reducer')
            return {...state,isRegisterSuccess:true}
        case login_success:
            console.log('reached is login')
            return {...state,
                    isLoggedIn:true,
                    currentToken:action.res.data.token
                }
        case filter_floor:
            console.log(Number(action.value))
            let floor = Number(action.value)
            let data = state.data.filter(item => item.floor === floor)
            console.log(data)
            return {
                ...state,
                displayData:[...data]
            }
        case filter_price:
            let value = action.value
            let sorted = []
            if(value == 'lotohi'){
                sorted = state.data.sort((a,b) => a.price - b.price)
            }else if(value == 'hitolo'){
                sorted = state.data.sort((a,b) => b.price - a.price)
            }else if(value === 'none'){
                sorted = state.data
            }
            return {
                ...state,
                displayData:[...sorted]
            }
        default:
            return state
    }
}

export default reducer

