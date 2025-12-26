import { toast } from "react-toastify";

export const notifyService = {
  notifyError: (message: string) => {
    toast.error(message, {
      style: {
        backgroundColor: "#FF3B30",
        color: "#fff",
        borderRadius: "20px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 700,
        fontSize: "1rem",
      },
    });
  },
  notifySuccess: (message: string) => {
    toast.success(message, {
      style: {
        backgroundColor: "#34C759",
        color: "#fff",
        borderRadius: "20px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 700,
        fontSize: "1rem",
      },
    });
  },
};
