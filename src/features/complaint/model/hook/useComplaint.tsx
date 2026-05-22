import { useGetComplaintReasonsQuery } from "@/entities/complaint/model";
import { ComplaintModal } from "../../ui";
import { useCreateComplaintMutation } from "@/entities/complaint/model/api";
import { useMyProfile } from "@/features/profile";
import { notifyService } from "@/shared/services";

type Props = {
	userId: string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export const useComplaint = () => {
	const { data } = useGetComplaintReasonsQuery();
	const { profile } = useMyProfile();

	const { notifyLoading, notifyUpdate } = notifyService;

	const [createComplaint] = useCreateComplaintMutation();

	const handleCreateComplaint = async (
		reasonId: string,
		description: string,
		targetId: string,
	) => {
		const toastId = notifyLoading("Отправляем жалобу..");

		try {
			await createComplaint({
				reporterId: profile?.userId ?? "",
				reasonId,
				description,
				targetId,
			});
			notifyUpdate(toastId, "Жалоба отправлена успешно!", true);
		} catch (error) {
			notifyUpdate(
				toastId,
				`Ошибка при отправке жалобы: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`,
				false,
			);
		}
	};

	const handleRenderModal = (props: Props) => {
		return (
			<ComplaintModal
				userId={props.userId}
				reasons={data ?? []}
				open={props.open}
				onOpenChange={props.onOpenChange}
				createComplaint={handleCreateComplaint}
			/>
		);
	};

	return { handleRenderModal };
};
