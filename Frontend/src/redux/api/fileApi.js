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
        }),
        fetchFile: build.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/fetchfile?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),
        fetchSingleFile:build.query({
            query:(id)=>({
                url:`/files/${id}`,
                method:'GET'
            })
        })
    })
});

export const { useUploadFileMutation,useFetchFileQuery,useFetchSingleFileQuery } = fileApi