import { createContext, useContext, useEffect, useState, type FC } from "react";
import { Error } from "../components/ui/error";

type Device = 'mobile' | 'desktop';

type DeviceProviderProps = {
  children: React.ReactNode;
  device: Device;
}

type DeviceProviderState = {
  device: Device
}

const initialState: DeviceProviderState = {
  device: 'mobile'
}

const DeviceProviderContext = createContext<DeviceProviderState>(initialState);

export const DeviceProvider: FC<DeviceProviderProps> = ({ children, device, ...props }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isRootError, setIsRootError] = useState<boolean>(false); 

  useEffect(() => {
    const root = window.document.getElementById('root');
      
    if (!root?.clientWidth)
      setIsRootError(true);

    if (Number(root?.clientWidth.toString()) <= 500)
      setIsMobile(true);
    else setIsMobile(false);
  }, [isMobile])
  
  const value = {
    device
  }

  if (!isMobile)
    return <Error message="Use mobile device for this application"/>

  if (isRootError)
    return <Error message="Root element is missing"/>

  if (!isRootError && isMobile)
    return (
      <DeviceProviderContext.Provider {...props} value={value}>
        {children}
      </DeviceProviderContext.Provider>
  )
}


