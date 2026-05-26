import { createContext, useEffect, useState, type FC } from "react";
import { Error } from "../components/ui/error";
// import { usePing } from "@/features/server-ping";

type Device = "mobile" | "desktop";

type DeviceProviderProps = {
	children: React.ReactNode;
	device: Device;
};

type DeviceProviderState = {
	device?: Device;
};

const initialState: DeviceProviderState = {
	device: "mobile",
};

const DeviceProviderContext = createContext<DeviceProviderState>(initialState);

export const DeviceProvider: FC<DeviceProviderProps> = ({
	children,
	...props
}) => {
	const [isMobile, setIsMobile] = useState<boolean>(true);
	const [isRootError, setIsRootError] = useState<boolean>(false);
	// const { isError, refetch } = usePing();

	useEffect(() => {
		const checkRootAndWidth = () => {
			const root = window.document.getElementById("root");

			if (!root?.clientWidth) {
				setIsRootError(true);
				return;
			}

			const isMobileWidth = Number(root.clientWidth) <= 500;
			setIsMobile(isMobileWidth);
		};
		checkRootAndWidth();

		const handleResize = () => requestAnimationFrame(checkRootAndWidth);

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// useEffect(() => {
	// 	const ping = setInterval(async () => {
	// 		await refetch();
	// 	}, 5000);

	// 	return () => clearInterval(ping);
	// }, [isError]);

	if (!isMobile)
		return <Error message='Use mobile device for this application' />;

	if (isRootError) return <Error message='Root element is missing' />;

	// if (isError) return <Error message='Соединение с сервером потеряно' />;

	if (!isRootError && isMobile)
		return (
			<DeviceProviderContext.Provider
				{...props}
				value={{ device: "mobile" }}
			>
				{children}
			</DeviceProviderContext.Provider>
		);
};
