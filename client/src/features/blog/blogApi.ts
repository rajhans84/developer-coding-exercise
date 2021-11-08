import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post, PostRespons } from '../../types';


export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    listPosts: builder.query<Post[], unknown>({
      query: () => `posts`,
    }),
    getPostBySlug: builder.query<PostRespons, string>({
      query: (slug) => `post/${slug}`,
    }),
  }),
});


export const { useListPostsQuery, useGetPostBySlugQuery } = blogApi;

export default blogApi;