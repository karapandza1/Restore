import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { User, Address } from "../../app/models/user";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query<User & { address: Address }, void>({
      query: () => 'profile', // backend endpoint za GET profil
      providesTags: ['Profile']
    }),
    updateProfile: builder.mutation<User & { address: Address }, User & { address: Address }>({
      query: (profileData) => ({
        url: 'profile', // backend endpoint za PUT profil
        method: 'PUT',
        body: profileData
      }),
      invalidatesTags: ['Profile'] // automatski refetch GET nakon update-a
    })
  })
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
