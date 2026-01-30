import { configureStore } from '@reduxjs/toolkit'
import { fileApi } from './api/fileApi'
import searchFilterReducer from './features/searchFilter'

export const store = configureStore({
    reducer: {
        searchFilter:searchFilterReducer,
        [fileApi.reducerPath]: fileApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fileApi.middleware)
})