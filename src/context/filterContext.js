import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/filterReducer'
import { productContext } from './Product'
export let filterContextProvider =createContext()
let intialState={
     filterData:[],
     allData:[],
     filter:{
        search:'',
        sort:'lowest'
     }
}
function FilterContext({children}) {
    console.log('hello i am loading form filter context')
   let [state,dispatch]=useReducer(reducer,intialState)
     let  {data}= useContext(productContext)
     console.log('data',data)
   useEffect(()=>{
        dispatch({type:"FILTER",paylaod:data})
   },[data])
  return   <filterContextProvider.Provider value={{...state}}>
                   {children}
      </filterContextProvider.Provider>
}

export default FilterContext