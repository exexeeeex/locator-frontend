export const env = import.meta.env.MODE;

export const _apiUrl =
	env === "development" ? "http://localhost:5000/api/" : "/api/";
