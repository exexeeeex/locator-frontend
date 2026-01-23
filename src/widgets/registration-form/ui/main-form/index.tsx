import { Card } from "@/shared/components/ui/card";
import { Label } from "@/shared/components/ui/label";
import { SquareUserRound } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { ru } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { RegistrationFormHeader } from "../form-header";
import { Textarea } from "@/shared/components/ui/textarea";
import { CityChanger } from "@/widgets/city-changer";
import { Controller, useFormContext } from "react-hook-form";
import {
	type RegistrationFormData,
	RegistrationInterestsSelector,
	useRegistrationMain,
} from "@/features/registration";
import { motion } from "framer-motion";
import { SLIDE_MOTION_PROPS } from "@shared/config";
import { ImageInput } from "@/shared/components";

export const RegistrationMain: React.FC = () => {
	const {
		control,
		register,
		setValue,
		formState: { errors },
	} = useFormContext<RegistrationFormData>();
	const { isMale, isFemale } = useRegistrationMain(control);

	return (
		<motion.div
			key='main'
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
					label='Основная информация'
					icon={
						<SquareUserRound
							size={18}
							color='white'
						/>
					}
				/>

				<div className='space-y-2'>
					<Label className='text-[15px] font-medium'>Имя</Label>
					<ImageInput
						icon={"profile"}
						iconSize={23}
						{...register("username")}
						placeholder='Ваше имя'
					/>
				</div>

				<div className='space-y-2 w-full mt-5'>
					<Label className='text-[15px] font-medium'>Город</Label>
					<Controller
						name='cityId'
						control={control}
						render={({ field }) => (
							<CityChanger
								currentCity={field.value}
								onSelectCity={field.onChange}
							/>
						)}
					/>
					{errors.cityId && (
						<p className='text-sm text-destructive'>{errors.cityId.message}</p>
					)}
				</div>

				<div className='space-y-2 mt-5'>
					<Label className='text-[15px] font-medium'>Пол</Label>
					<div className='flex bg-primary/20 p-1 rounded-2xl'>
						<button
							onClick={() => setValue("gender", "male")}
							className={`
                              flex-1 h-10 rounded-xl text-[15px] font-medium transition-all
                              ${isMale ? "bg-card shadow-sm" : "text-muted-foreground"}
                            `}
						>
							Мужчина
						</button>
						<button
							onClick={() => setValue("gender", "female")}
							className={`
                            flex-1 h-10 rounded-xl text-[15px] font-medium transition-all
                            ${isFemale ? "bg-card shadow-sm" : "text-muted-foreground"}
                        `}
						>
							Женщина
						</button>
					</div>
				</div>

				<div className='space-y-2 mt-5'>
					<Label className='text-[15px] font-medium'>О себе</Label>
					<Textarea
						{...register("about")}
						placeholder='Пару слов о себе…'
						className='
                        min-h-35
                        rounded-2xl
                        bg-input/80
                        border border-border/40
                        text-[16px] leading-relaxed
                        focus-visible:ring-4 focus-visible:ring-primary/20
                        focus-visible:bg-card
                        transition
                      '
					/>
					{errors.about && (
						<p className='text-sm text-destructive'>{errors.about.message}</p>
					)}
				</div>

				<div className='space-y-2'>
					<Label className='text-[15px] font-medium'>Образование</Label>
					<ImageInput
						icon={"education"}
						{...register("education")}
						iconSize={23}
					/>
				</div>

				<div className='space-y-2'>
					<Label className='text-[15px] font-medium'>Место работы</Label>
					<ImageInput
						icon={"work"}
						{...register("job")}
						iconSize={23}
						placeholder='Дома на диване..'
					/>
				</div>

				<div className='space-y-2 mt-5'>
					<Label className='text-[15px] font-medium'>Дата рождения</Label>
					<Controller
						name='birthday'
						control={control}
						render={({ field }) => (
							<DayPicker
								mode='single'
								locale={ru}
								selected={field.value ? new Date(field.value) : undefined}
								onSelect={(d) => field.onChange(d?.toISOString())}
								captionLayout='dropdown'
								fromYear={1980}
								toYear={new Date().getFullYear() - 16}
								className='
                                  bg-card/80 backdrop-blur-xl
                                  rounded-3xl p-4
                                  border border-border/40
                                '
								classNames={{
									caption_label: "hidden",
									caption: "flex justify-center gap-2",
									dropdown:
										"bg-card text-foreground rounded-md px-2 py-1 max-h-48 overflow-y-auto",
									dropdown_month: "max-h-48 overflow-y-auto",
									dropdown_year: "max-h-48 overflow-y-auto",
									chevron: "fill-white",
								}}
							/>
						)}
					/>
					{errors.birthday && (
						<p className='text-sm text-destructive'>
							{errors.birthday.message}
						</p>
					)}
				</div>
				<div className='space-y-2 mt-5'>
					<Label className='text-[15px] font-medium'>Выберите интересы</Label>
					<RegistrationInterestsSelector />
				</div>
			</Card>
		</motion.div>
	);
};
