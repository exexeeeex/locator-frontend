import type { ComplaintReason } from "@/entities/complaint";
import { Modal, Textarea } from "@/shared/components";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { cn } from "@/shared/lib/utils";

type ComplaintModalProps = {
	userId: string;
	reasons: ComplaintReason[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
	createComplaint: (
		reasonId: string,
		description: string,
		targetId: string,
	) => void;
};

export const ComplaintModal: React.FC<ComplaintModalProps> = ({
	userId,
	reasons,
	open,
	onOpenChange,
	createComplaint,
}) => {
	const schema = yup.object().shape({
		reasonId: yup.string().required("Выберите причину жалобы"),
		description: yup
			.string()
			.min(20, "Описание должно быть не менее 20 символов")
			.max(100, "Описание должно быть не более 100 символов")
			.required("Введите описание жалобы"),
	});

	const {
		register,
		setValue,
		watch,
		formState: { errors },
	} = useForm<{
		reasonId: string;
		description: string;
	}>({
		resolver: yupResolver(schema),
		defaultValues: { reasonId: "", description: "" },
	});

	return (
		<Modal
			classNames={{ content: "bg-card border-muted-foreground/20" }}
			open={open}
			disabled={
				!watch("reasonId") ||
				watch("description").length < 20 ||
				!watch("description")
			}
			buttonProps={"Отправить жалобу"}
			action={() =>
				createComplaint(watch("reasonId"), watch("description"), userId)
			}
			trigger={<div className='hidden' />}
			onOpenChange={onOpenChange}
		>
			<h1 className='text-lg font-semibold mb-4'>
				Пожаловаться на пользователя
			</h1>
			<Select
				defaultValue={watch("reasonId") || undefined}
				onValueChange={(value: string) =>
					setValue("reasonId", value, { shouldDirty: true })
				}
			>
				<SelectTrigger className='w-full rounded-xl bg-background border border-foreground/50'>
					<SelectValue placeholder='Выберите причину жалобы' />
				</SelectTrigger>
				<SelectContent className='bg-card/97 rounded-xl'>
					<SelectGroup>
						<SelectLabel>Причины</SelectLabel>
						{reasons.map((reason) => (
							<SelectItem
								className='rounded-lg'
								key={reason.id}
								value={reason.id}
							>
								{reason.code}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			{watch("reasonId") && (
				<>
					<Textarea
						{...register("description")}
						className={cn(
							`mt-4 rounded-2xl min-h-40 max-h-42`,
							errors.description
								? "border-destructive"
								: "border-muted-foreground/20",
						)}
						placeholder='Подробнее опишите причину жалобы..'
						maxLength={200}
					/>
					{errors.description && (
						<p className='text-destructive text-sm mt-1'>
							{errors.description.message}
						</p>
					)}
				</>
			)}
		</Modal>
	);
};
