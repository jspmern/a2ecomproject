 

function filterReducer(state,action) {
    console.log('filter reducer',action.payload)
    switch(action.type)
    {
     
        case "FILTER":
            let temp= ['a','b'] 
             return {...state,allData:temp,filterData:temp}
            default :
                return state
    }
    
}

export default filterReducer