import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.themoviedb.org/3/",
		prepareHeaders: (headers) => {
			headers.set(
				"Authorization",
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWYzYzI5ZjcxZGE4NGU0NDVkNmJiMTkzM2Q2OThkNyIsIm5iZiI6MTc3NjA4Njk0Ni4xNjUsInN1YiI6IjY5ZGNlZmEyNTI0ZGFkZDEyZGI2NTZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DOgHq8LQt6gEy73KYZYml8vMr69RoWpppn3SGtKYGLI",
			);
			headers.set("accept", "application/json");
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getMovies: builder.query({
			query: ({ category = "now_playing" }) =>
				`movie/${category}?language=en-US&page=1`,
		}),
	}),
});

export const { useGetMoviesQuery } = apiSlice;
