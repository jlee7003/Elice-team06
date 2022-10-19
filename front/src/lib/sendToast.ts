import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "info" | "success" | "error";

const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
};

const sendToast = (message: string, toastType: ToastType) => {
    switch (toastType) {
        case "info":
            toast.info(message, toastConfig as ToastOptions);
            return;
        case "success":
            toast.success(message, toastConfig as ToastOptions);
            return;
        case "error":
            toast.error(message, toastConfig as ToastOptions);
            return;
    }
};

export default sendToast;
