import { toast } from "react-toastify";

const baseStyle = {
	borderRadius: "22px",
	padding: "10px 16px",
	minHeight: "44px",
	backdropFilter: "blur(12px)",
	WebkitBackdropFilter: "blur(12px)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "15px",
	fontWeight: 500,
	letterSpacing: "-0.2px",
	boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
};

export const notifyService = {
	notifyError: (message: string) => {
		toast.error(message, {
			style: {
				...baseStyle,
				background: "rgba(255, 59, 48, 0.85)",
				color: "#fff",
			},
		});
	},

	notifySuccess: (message: string) => {
		toast.success(message, {
			style: {
				...baseStyle,
				background: "rgba(52, 199, 89, 0.85)",
				color: "#fff",
			},
		});
	},
};
