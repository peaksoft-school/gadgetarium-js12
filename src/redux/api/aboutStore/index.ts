import {api as index} from '../index'

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPhotoStore: build.query<ForStore.GetStoreResponse, ForStore.GetStoreRequest>({
      query: () => ({
        url: "",
        method: "GET",

      }),
      providesTags: ['storePhotos'],
    })
  })
})

export const {useGetPhotoStoreQuery} = api