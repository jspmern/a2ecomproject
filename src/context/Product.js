import { createContext, useReducer } from "react"
import reducer from '../reducer/product'
export  let productContext=createContext()
let intialState={
    data:[],
    loading:false,
    error:''
}
function Product({children}) {
    let [state,dispatch]=useReducer(reducer,intialState)
    let url="https://dummyjson.com/products"
   //this is for the fetching the data
   function fetchData()
   {
        dispatch({type:"LOADING"})
        fetch(url).then((item)=>{
            return item.json()
        }).then((item)=>{
            dispatch({type:"DATA_FETCHED",payload:item.products})
        }).catch((err)=>{
            dispatch({type:"ERROR",payload:err})
        })
   }
  return (
        <productContext.Provider value={{...state,fetchData}} >
            {children}
        </productContext.Provider>
  )
}

export default Product