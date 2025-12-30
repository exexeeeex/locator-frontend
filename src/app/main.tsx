import { createRoot } from "react-dom/client";
import "@/shared/assets/index.css";
import "@/shared/assets/_zeroing.scss";
import "@/shared/assets/_global.scss";
import { DeviceProvider } from "@/shared/providers/device-provider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "@/shared/lib/api/store";
import { getTelegram } from "@/features/telegram/model/services/get-telegram";
import { ToastContainer } from "react-toastify";
import { bootstrapAuth } from "./bootstrap-auth";
import { ThemeProvider } from "@/shared/providers";

const tg = getTelegram();
if (tg.initDataUnsafe?.user && tg.initData) {
  bootstrapAuth(tg.initData);
}

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <DeviceProvider device='mobile'>
      <ThemeProvider defaultTheme='system' storageKey='_ui-theme'>
        <ToastContainer
          position='bottom-center'
          closeButton={false}
          hideProgressBar={true}
          draggable={true}
          autoClose={2000}
          style={{
            padding: "60px 50px",
          }}
        />
        <RouterProvider router={router} />
      </ThemeProvider>
    </DeviceProvider>
  </Provider>
);
