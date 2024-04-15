import {api as index} from '../../index';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postRegister: build.mutation<REGISTER.PostRegisterResponse, REGISTER.PostRegisterRequest>({
      query: (newData) => ({
        url: "",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ['auth'],
    })
  })
})

export const {usePostRegisterMutation} = api