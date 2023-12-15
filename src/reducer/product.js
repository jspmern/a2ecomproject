function product(state, action) {
    switch (action.type) {
        case "LOADING": 
             return {...state,loading:true}

        case "DATA_FETCHED": 
                return {...state,data:action.payload,loading:false}


        case "ERROR":
            return {...state,error:action.payload,loading:false}

        default:
            return state
    }
}
export default product