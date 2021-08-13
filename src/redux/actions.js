import { createAction } from "@reduxjs/toolkit";

export const getAllPopularProductsRequest = createAction("getAll/POPULARPRODUCTS_REQUEST")
export const getAllPopularProductsSuccess = createAction("getAll/POPULARPRODUCTS_SUCCESS")
export const getAllPopularProductsError = createAction("getAll/POPULARPRODUCTS_ERROR")

