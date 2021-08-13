import getAllPopularProducts from "./actions"
import axios from "axios"
import {
    getAllPopularProductsRequest,
    getAllPopularProductsSuccess,
    getAllPopularProductsError,
  } from './actions.js'
  

axios.defaults.baseURL = "http://localhost:4445"

const getPopularProducts = ()=>dispatch=>{
    dispatch(getAllPopularProductsRequest())
    axios.get("/popularProducts").then((response)=>{
        console.log(response.data);
        dispatch(getAllPopularProductsSuccess(response.data))
    }).catch((error)=>{
        dispatch(getAllPopularProductsError(error))
    })
}

export default getPopularProducts