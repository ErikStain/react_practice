import { combineReducers, createReducer } from '@reduxjs/toolkit'
import {
  getAllPopularProductsRequest,
  getAllPopularProductsSuccess,
  getAllPopularProductsError,
} from './actions.js'

const popularProducts = createReducer([], {
  [getAllPopularProductsSuccess]: (_, action) => action.payload,
})
const popularProductsError = createReducer(null,{
    [getAllPopularProductsError]:(_, action)=>action.payload
})

export default combineReducers({data:popularProducts, error:popularProductsError})
