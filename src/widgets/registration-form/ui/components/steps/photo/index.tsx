import {
	useRegistrationFormFiles,
	type RegistrationFormData,
} from "@/features/registration";
import { useFormContext } from "react-hook-form";
import { useRef } from "react";
import { Plus, ImagePlus, X } from "lucide-react";
import { SLIDE_MOTION_PROPS } from "@shared/config";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";

export const RegistrationStepPhoto: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const {
		setValue,
		watch,
		formState: { errors },
	} = useFormContext<RegistrationFormData>();
	const { files, handleFileChange, handleFileRemove } =
		useRegistrationFormFiles(setValue, watch);

	const MAX_FILES = 6;
	const remaining = MAX_FILES - files.length;

	return (
		<motion.div
			key='photo'
			{...SLIDE_MOTION_PROPS}
		>
			<GlassCard glow>
				<SectionHeader
					icon={"camera"}
					label='Фотографии'
					description={`Загрузи до ${MAX_FILES} фото — покажи себя!`}
					gradient='from-fuchsia-500 to-pink-400'
				/>

				<button
					type='button'
					onClick={() => inputRef.current?.click()}
					className={cn(
						"group relative w-full rounded-2xl border-2 border-dashed",
						"border-primary/50 hover:border-primary/30",
						"bg-white/2 hover:bg-white/4",
						"transition-all duration-300",
						"flex flex-col items-center justify-center gap-3 py-12",
						"relative z-10",
						files.length >= MAX_FILES && "pointer-events-none opacity-40",
					)}
				>
					<div className='flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-violet-500/20 transition-transform duration-300 group-hover:scale-110'>
						<ImagePlus
							size={28}
							className='text-primary/70 transition-colors group-hover:text-primary'
						/>
					</div>
					<div className='text-center'>
						<p className='font-medium text-foreground/80'>Загрузить фото</p>
						<p className='text-sm text-muted-foreground/50 mt-1'>
							{remaining > 0
								? `Осталось ${remaining} из ${MAX_FILES}`
								: "Максимум загружено"}
						</p>
					</div>

					<div className='pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-fuchsia-500/5 opacity-0 transition-opacity group-hover:opacity-100' />
				</button>

				{files.length > 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='mt-5 grid grid-cols-3 gap-3'
					>
						{files.map((file, i) => (
							<motion.div
								key={file.name + i}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ delay: i * 0.05 }}
								className='group relative aspect-square'
							>
								<img
									src={URL.createObjectURL(file)}
									alt=''
									className='h-full w-full rounded-2xl object-cover border border-white/6'
								/>

								<div className='absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/30 transition-colors duration-200' />

								<span className='absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-[11px] font-semibold text-white backdrop-blur-sm'>
									{i + 1}
								</span>

								<button
									onClick={() => handleFileRemove(file.name)}
									type='button'
									className='
                    				  absolute right-2 top-2
                    				  flex h-7 w-7 items-center justify-center rounded-full
                    				  bg-red-500/80 text-white backdrop-blur-sm
                    				  opacity-0 group-hover:opacity-100
                    				  scale-75 group-hover:scale-100
                    				  transition-all duration-200
                    				  hover:bg-red-500
                    				'
								>
									<X size={14} />
								</button>

								{i === 0 && (
									<span className='absolute bottom-2 left-2 rounded-full bg-primary/80 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm'>
										Главное
									</span>
								)}
							</motion.div>
						))}

						{remaining > 0 && (
							<button
								type='button'
								onClick={() => inputRef.current?.click()}
								className='
                  				  aspect-square rounded-2xl
                  				  border-2 border-dashed border-primary/50
                  				  bg-white/2 hover:bg-white/4
                  				  flex items-center justify-center
                  				  transition-all duration-200
                  				  hover:border-primary/20
                  				'
							>
								<Plus
									size={24}
									className='text-muted-foreground/30'
								/>
							</button>
						)}
					</motion.div>
				)}

				{errors.files && (
					<p className='mt-3 text-sm text-rose-400'>
						{String(errors.files.message)}
					</p>
				)}
			</GlassCard>

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
