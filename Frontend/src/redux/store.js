import { configureStore } from '@reduxjs/toolkit'
import { fileApi } from './api/fileApi'


export const store = configureStore({
    reducer: {
        [fileApi.reducerPath]: fileApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fileApi.middleware)
})