import { Card } from "@/shared/components/ui/card";
import { useRef, type ChangeEvent, type FC } from "react";
import { RegistrationFormHeader } from "../form-header";
import { Camera, Upload } from "lucide-react";
import type { RegistrationPhotoProps } from "@/shared/lib/react-hook-form";

export const RegistrationPhoto: FC<RegistrationPhotoProps> = ({ onFileChange, files }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleOpenFileWindow = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click()
  }

  return (
    <>
      <Card className="w-full bg-card border-1 rounded-3xl mb-[50px] border-border p-[20px]">
        <RegistrationFormHeader label="Загрузка фотографий" icon={<Camera color="white" size={20}/>}/>
        <div>
          <div onClick={handleOpenFileWindow} className="w-full rounded-xl border-2 flex flex-col items-center justify-center active:bg-card border-border border-dashed h-[200px] bg-background">
            <div className="items-center flex flex-col gap-2">
              <Upload size={60}/>
              <h2 className="font-semibold">Загрузить фотографии</h2>
              <p className="text-[rgb(113, 109, 109)] text-sm">До 6 фото • JPEG, PNG до 5MB</p>
            </div>
          </div>
        </div>
        <section className="flex flex-wrap flex-row justify-between">
          {files.map((file, index) => <img className="w-[150px] h-[150px] rounded-lg object-cover" key={index} src={URL.createObjectURL(file)}/>)}
        </section>
      </Card>
      <input onChange={(e) => onFileChange(e)} accept="image/*" type="file" ref={fileInputRef} multiple style={{display: 'none'}}/>
    </>
  )
} 
