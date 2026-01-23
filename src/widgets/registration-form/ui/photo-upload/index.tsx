import { Card } from "@/shared/components/ui/card";
import { useRef } from "react";
import { RegistrationFormHeader } from "../form-header";
import { Camera, Upload } from "lucide-react";
import {
	useRegistrationFormFiles,
	type RegistrationFormData,
} from "@/features/registration";
import { motion } from "framer-motion";
import { SLIDE_MOTION_PROPS } from "@shared/config";
import { useFormContext } from "react-hook-form";

export const RegistrationPhoto = ({}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const {
		setValue,
		watch,
		formState: { errors },
	} = useFormContext<RegistrationFormData>();

	const { files, handleFileChange, handleFileRemove } =
		useRegistrationFormFiles(setValue, watch);

	return (
		<motion.div
			key='photo'
			{...SLIDE_MOTION_PROPS}
		>
			<Card
				className='
                  w-full mb-4 p-6
                  rounded-3xl
                  bg-card/80 backdrop-blur-xl
                  border border-border/40
                  shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]
                '
			>
				<RegistrationFormHeader
					label='Фотографии'
					icon={
						<Camera
							size={18}
							color='white'
						/>
					}
				/>

				<div
					onClick={() => inputRef.current?.click()}
					className='
                          h-48 rounded-3xl
                          bg-muted/40
                          flex flex-col items-center justify-center gap-2
                          text-muted-foreground
                          active:scale-[0.98]
                          transition
                        '
				>
					<Upload size={48} />
					<span className='font-medium'>Загрузить фото</span>
					<span className='text-sm'>До 6 изображений</span>
				</div>

				<div className='mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4'>
					{files.map((file, i) => (
						<div
							key={i}
							className='relative aspect-square'
						>
							<img
								src={URL.createObjectURL(file)}
								className='h-full w-full rounded-2xl object-cover shadow-sm'
							/>

							<button
								onClick={() => handleFileRemove(file.name)}
								type='button'
								className='
        						  absolute right-2 top-2
        						  flex h-6 w-6 items-center justify-center
        						  rounded-full bg-black/60 text-white
        						  hover:bg-black/80
        						'
							>
								✕
							</button>
						</div>
					))}
				</div>
			</Card>

			<input
				ref={inputRef}
				type='file'
				multiple
				accept='image/*'
				hidden
				onChange={handleFileChange}
			/>
		</motion.div>
	);
};
