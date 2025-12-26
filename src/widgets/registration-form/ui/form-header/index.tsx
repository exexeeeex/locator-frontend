import type { FC } from "react";

type Props = {
  icon: React.ReactNode,
  label: string;
}

export const RegistrationFormHeader: FC<Props> = ({ icon, label }) => 
    <header className="flex gap-[12px] items-center border-b-1 border-border pb-[12px]">
      <div className="w-[35px] h-[35px] rounded-lg flex items-center justify-center bg-primary">
        {icon} 
      </div>
      <h2 className="font-semibold text-md">{label}</h2>
    </header>
  
