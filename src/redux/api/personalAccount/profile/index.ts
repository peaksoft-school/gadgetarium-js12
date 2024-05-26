import { api as index } from "../../index";

interface IProfile {
  oldPassword: string;
  newPassword: string;
  confirmationPassword: string;
}

interface IInformation {
  userName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface IImage {
  image: string;
}

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postProfilesPasswordQuery: build.mutation<IProfile[], IProfile>({
      query: (products) => ({
        url: "/api/personal/change-password",
        method: "POST",
        body: products,
        headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				},
      })
    }),

    postProfilesInformationQuery: build.mutation<IInformation[], IInformation>({
      query: (products) => ({
        url: "/api/personal/edit-profile",
        method: "POST",
        body: products,
        headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				},
      })
    }),

   putProfilesImageQuery: build.mutation<IImage, void>({
      query: (products) => ({
        url: "/api/personal/add-image",
        method: "PUT",
        body: products,
        headers: {
					'Authorization': `Bearer ${localStorage.getItem("token")}` 
				},
      })
    }),
  })
});

export const { usePostProfilesPasswordQueryMutation, usePostProfilesInformationQueryMutation, usePutProfilesImageQueryMutation } = api;