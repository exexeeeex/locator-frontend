import { toast, type Id } from "react-toastify";

const baseStyle = {
	borderRadius: "22px",
	padding: "12px 20px",
	minHeight: "44px",

	backdropFilter: "blur(24px) saturate(180%)",
	WebkitBackdropFilter: "blur(24px) saturate(180%)",

	border: "1px solid rgba(255, 255, 255, 0.25)",

	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "15px",
	fontWeight: 600,
	letterSpacing: "-0.2px",

	boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",

	transition: "all 0.3s ease",
};

export const notifyService = {
	notifyError: (message: string) => {
		toast.error(message, {
			style: {
				...baseStyle,
				background: "rgba(255, 59, 48, 0.25)",
				color: "#fff",
				border: "1px solid rgba(255, 59, 48, 0.4)",
			},
		});
	},

	notifySuccess: (message: string) => {
		toast.success(message, {
			style: {
				...baseStyle,
				background: "rgba(52, 199, 89, 0.25)",
				color: "#fff",
				border: "1px solid rgba(52, 199, 89, 0.4)",
			},
		});
	},

	notifyLoading: (message: string) => {
		const loading = toast.loading(message, {
			style: {
				...baseStyle,
				color: "#fff",
				background: "rgba(140, 140, 140, 0.25)",
				border: "1px solid rgba(255, 255, 255, 0.3)",
			},
		});
		return loading;
	},

	notifyUpdate: (toastId: Id, message: string, isSuccess: boolean) => {
		toast.update(toastId, {
			render: message,
			isLoading: false,
			type: isSuccess ? "success" : "error",
			autoClose: 2000,
			draggable: true,
			style: {
				...baseStyle,
				background: isSuccess
					? "rgba(52, 199, 89, 0.25)"
					: "rgba(255, 59, 48, 0.25)",
				color: "#fff",
				border: isSuccess
					? "1px solid rgba(52, 199, 89, 0.4)"
					: "1px solid rgba(255, 59, 48, 0.4)",
			},
		});
	},
};
