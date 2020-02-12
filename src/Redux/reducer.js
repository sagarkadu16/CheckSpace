import { register_success, login_success, filter_floor, filter_price, check_available, book_room, confirm_order, user_logout } from "./action"


const initialState = {
    data:[
        {  
            id:1,
            floor:1,
            img:"https://barnescreativestudios.com/wp-content/uploads/2020/01/studio3-400x230.jpg",
            name:'hercules',
            capacity:4,
            price:1000,
            bookingLog:[],
            status:true
        },
        {
            id:2,
            floor:1,
            img:"https://www.eicc.co.uk/media/1129/carrick-ochil-board-room.jpg?anchor=center&mode=crop&width=400&height=230&rnd=131104606870000000",
            name:'james',
            capacity:5,
            price:1200,
            bookingLog:[],
            status:true
        },
        {
            id:3,
            floor:2,
            img:"https://barnescreativestudios.com/wp-content/uploads/2020/01/studio3-400x230.jpg",
            name:'Gather',
            capacity:3,
            price:1300,
            bookingLog:[],
            status:true
        },
        {
            id:4,
            floor:3,
            img:"https://www.eicc.co.uk/media/1448/students_131004_0114.jpg?anchor=center&mode=crop&width=400&height=230&rnd=131166967140000000",
            name:'Ninja',
            capacity:4,
            price:900,
            bookingLog:[],
            status:true
        },
        {
            id:5,
            floor:4,
            img:"https://gapanorams.com/wp-content/uploads/2016/03/03.10.2016_07.22.41-400x230.jpg",
            name:'Silence',
            capacity:10,
            price:5000,
            bookingLog:[],
            status:false
        }
    ],
    isLoggedIn:false,
    isRegisterSuccess:false,
    currentToken:'',
    currentRoom:{},
    start:0,
    end:0,
    displayData:[
        {  
            id:1,
            floor:1,
            img:"https://barnescreativestudios.com/wp-content/uploads/2020/01/studio3-400x230.jpg",
            name:'hercules',
            capacity:4,
            price:1000,
            status:true
        },
        {
            id:2,
            floor:1,
            img:"https://www.eicc.co.uk/media/1129/carrick-ochil-board-room.jpg?anchor=center&mode=crop&width=400&height=230&rnd=131104606870000000",
            name:'james',
            capacity:5,
            price:1200,
            From:'',
            To:'',
            status:true
        },
        {
            id:3,
            floor:2,
            img:"https://barnescreativestudios.com/wp-content/uploads/2020/01/studio3-400x230.jpg",
            name:'Gather',
            capacity:3,
            price:1300,
            From:'',
            To:'',
            status:true
        },
        {
            id:4,
            floor:3,
            img:"https://www.eicc.co.uk/media/1448/students_131004_0114.jpg?anchor=center&mode=crop&width=400&height=230&rnd=131166967140000000",
            name:'Ninja',
            capacity:4,
            price:900,
            From:'',
            To:'',
            status:true
        },
        {
            id:5,
            floor:4,
            img:"https://gapanorams.com/wp-content/uploads/2016/03/03.10.2016_07.22.41-400x230.jpg",
            name:'Silence',
            capacity:10,
            price:5000,
            From:'',
            To:'',
            status:false
        }
    ],
    warningText:'',
    bookedRooms:[]
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case register_success:
            console.log(action.res.data.error)
            if (action.res.data.error){
                return {
                    ...state,
                    isRegisterSuccess:false,
                    warningText:'User Already Exist, Try with different user'
                }
            }else{
                return {...state,isRegisterSuccess:true,warningText:''}
            }
        case login_success:
            return {...state,
                    isLoggedIn:true,
                    currentToken:action.res.data.token
                }
        case filter_floor:
            console.log(Number(action.value))
            let floor = (action.value)
            if(floor === 'none'){
                let data = state.data
                return {
                    ...state,
                    displayData:data
                }
            }else{
                console.log(floor)
                let data = state.data.filter(item => item.floor === Number(floor))
                console.log(data)
                return {
                    ...state,
                    displayData:data
                }
            }
        case filter_price:
            let value = action.value
            let sorted = []
            if(value === 'lotohi'){
                sorted = state.data.sort((a,b) => a.price - b.price)
            }else if(value === 'hitolo'){
                sorted = state.data.sort((a,b) => b.price - a.price)
            }else if(value === 'none'){
                sorted = state.data
            }
            return {
                ...state,
                displayData:[...sorted]
            }
        case check_available:
            //filtering according to date
            //start date should be greater than available date
            let start = action.start
            let end = action.end
            let data = []
            let currentData = state.data
            for(let i = 0; i < currentData.length; i++){
                let log = currentData[i].bookingLog
                if(log.length){
                    for(let j = 0; j < log.length; j++){
                        let a = log[j]
                        if((start >= a[0] && start <= a[1]) ||( end >= a[0] && end <= a[1] )|| (start <= a[0] && end >= a[1])){
                            console.log('a',a[0],a[1])
                            continue
                        }else{
                            data.push(currentData[i])
                            break
                        }
                    }
                }else{
                    data.push(currentData[i])
                }
            }
            console.log(data)
            return{
                ...state,
                start:start,
                end:end,
                displayData:data
            }

        case book_room:
            //booking room ---> booking page
            let roomDetail = state.data.find(item => item.id === Number(action.id))
            // console.log('room detail',roomDetail,action.id)
            return {
                ...state,
                currentRoom : {...roomDetail}
            }
        case confirm_order:
            // let bookedroom = state.data.find(item => item.id === action.id)
            let bookedroom = action.pack
            //adding time log in data ---> booking Log
            let confirmedRoom = state.data.find(room => room.id === action.id) 
            // let changedData = state.data.filter(room => room.id !== action.id)
            let changedData = state.data
            confirmedRoom = {...confirmedRoom,bookingLog:[...confirmedRoom.bookingLog,[state.start,state.end]]}
            // changedData = [...changedData,confirmedRoom]
            for(let i = 0; i < changedData.length; i++){
                if(action.id === changedData[i].id){
                    changedData[i] = confirmedRoom
                    break
                }
            }
            return {
                ...state,
                bookedRooms:[...state.bookedRooms,bookedroom],
                displayData:changedData,
                data:[...changedData],
                start:0,
                end:0
            }
        case user_logout:
            return {
                ...state,
                isLoggedIn : !state.isLoggedIn
            }
        default:
            return state
    }
}

export default reducer

