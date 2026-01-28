import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fileApi = createApi({
    reducerPath: 'fileApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://previoq-backend.onrender.com/api' }),
    endpoints: (build) => ({
        uploadFile: build.mutation({
            query: (formData) => ({
                url: '/upload',
                method: 'POST',
                body: formData
            })
        })
    })
});

export const { useUploadFileMutation } = fileApi