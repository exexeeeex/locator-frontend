import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { authenticationApi } from "..";
import type { User } from "@/entities/user/model/types/user";

export interface AuthenticationSliceState {
	user: {
		id: string | null;
	} | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
}

const initialState: AuthenticationSliceState = {
	isAuthenticated: false,
	user: null,
	isLoading: false,
	error: null,
};

const authSlice = createSlice({
	name: "authentication",
	initialState,
	reducers: {
		setUser: {
			reducer: (state, action: PayloadAction<User>) => {
				state.user = action.payload;
			},
			prepare: (user: User) => ({
				payload: { ...user },
			}),
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				authenticationApi.endpoints.me.matchFulfilled,
				(state, action) => {
					if (action.payload.user?.id) {
						state.user = {
							id: action.payload.user.id,
						};
						state.isAuthenticated = true;
					}

					state.error = null;
					state.isLoading = false;
				},
			)
			.addMatcher(authenticationApi.endpoints.me.matchPending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addMatcher(
				authenticationApi.endpoints.me.matchRejected,
				(state, action) => {
					state.isLoading = false;
					state.error = action.error?.message || "Ошибка загрузки пользователя";
					state.isAuthenticated = false;
					state.user = null;
				},
			)

			.addMatcher(
				authenticationApi.endpoints.login.matchFulfilled,
				(state, action) => {
					if (action.payload.user?.id) {
						state.user = {
							id: action.payload.user.id,
						};
						state.isAuthenticated = true;
					}
					state.error = null;
					state.isLoading = false;
				},
			);
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
