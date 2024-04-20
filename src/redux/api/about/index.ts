import {api as index} from '../index'

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPhotoStore: build.query<FORSTORE.GetStoreResponse, FORSTORE.GetStoreRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ['store_photos'],
    })
  })
})

export const {useGetPhotoStoreQuery} = api