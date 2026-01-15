export interface AuthenticationResponse {
	sessionId: string;
	user: {
		id: string;
		role: string;
	};
}
