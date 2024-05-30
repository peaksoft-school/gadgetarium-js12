import { api as index } from "../../index";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postProfilesPasswordQuery: build.mutation<
      PROFILESTORE.PostProfilePasswordResponse,
      PROFILESTORE.PostProfilePasswordRequest
    >({
      query: (products) => ({
        url: "/api/personal/change-password",
        method: "POST",
        body: products,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
    }),

    postProfilesInformationQuery: build.mutation<
      PROFILESTORE.PostProfileInformationResponse,
      PROFILESTORE.PostProfileInformationRequest
    >({
      query: (products) => ({
        url: "/api/personal/edit-profile",
        method: "POST",
        body: products,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
    }),

    putProfilesImageQuery: build.mutation<
      PROFILESTORE.PutProfileImageResponse,
      PROFILESTORE.PutProfileImageRequest
    >({
      query: (products) => ({
        url: "/api/personal/add-image",
        method: "PATCH",
        body: products,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      })
    }),
  })
});

export const { usePostProfilesPasswordQueryMutation, usePostProfilesInformationQueryMutation, usePutProfilesImageQueryMutation } = api;