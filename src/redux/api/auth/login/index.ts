import {api as index} from '../../index';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postLogin: build.mutation<AUTH.PostLoginresponse, AUTH.PostLoginRequest>({
      query: (newData) => ({
        url: '',
        method: 'POST',
        body: newData,
      }),
      invalidatesTags: ['auth'],
    })
  })
})

export const {usePostLoginMutation} = api