import { createSlice } from "@reduxjs/toolkit";

export const candidateSlice = createSlice({
	name: "candidate",
	initialState: {
		value: 0,
	},
	reducers: {
		incremented: (state) => {
			state.value += 1;
		},
	},
});

export const { incremented } = candidateSlice.actions;
