import { configureStore } from '@reduxjs/toolkit'
import popularProducts from './redusers'

const store = configureStore({
    reducer:{popularProducts}
})

export default store