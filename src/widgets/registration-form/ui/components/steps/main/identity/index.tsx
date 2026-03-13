import type { RegistrationFormData } from "@/features/registration";
import { FieldGroup } from "@/shared/components/ui/field-group";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { ModernInput } from "@/shared/components/ui/modern-input";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { useFormContext } from "react-hook-form";

export const RegistrationStepIdentity: React.FC = () => {
	const formContext = useFormContext<RegistrationFormData>();

	if (!formContext) {
		console.error("RegistrationStepIdentity: useFormContext returned null");
		return <div>Ошибка загрузки формы</div>;
	}

	const {
		register,
		formState: { errors },
	} = formContext;

	return (
		<GlassCard glow>
			<SectionHeader
				icon={"profile"}
				label={"Кто ты?"}
				// Используем градиент из наших новых CSS переменных
				gradient='from-primary to-accent'
			/>
			<div className='space-y-5'>
				<FieldGroup
					label={"Имя"}
					error={errors.username?.message}
				>
					<ModernInput
						icon={"profile"}
						placeholder='Как тебя зовут?'
						{...register("username")}
					/>
				</FieldGroup>
				<FieldGroup
					label='Образование'
					error={errors.education?.message}
				>
					<ModernInput
						icon={"education"}
						placeholder='Где учился(-ась)?'
						{...register("education")}
					/>
				</FieldGroup>
				<FieldGroup
					label='Работа'
					error={errors.job?.message}
				>
					<ModernInput
						icon={"work"}
						placeholder='Где работаешь?'
						{...register("job")}
					/>
				</FieldGroup>
			</div>
		</GlassCard>
	);
};
