import { InteractionType } from "@/entities/interaction/model/types";
import type { User } from "@/entities/user";
import { useComplaint } from "@/features/complaint";
import { useCreateInteraction } from "@/features/like/model/hooks/use-send-like";
import { Button } from "@/shared/components";
import { Icon } from "@shared/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
	isLike: boolean;
	myProfileId: string;
	user: User;
};

export const useLikeCardActions = () => {
	const { handleCreateInteraction } = useCreateInteraction();
	const { handleRenderModal } = useComplaint();

	const [openModal, setOpenModal] = useState<boolean>(false);

	const handleCreateButtons = (
		user: { id: string; username: string },
		myProfileId: string,
	): Record<string, React.ReactNode> => {
		const buttons: Record<string, React.ReactNode> = {
			reply: (
				<Button
					onClick={() => {
						handleCreateInteraction(user.id, myProfileId, InteractionType.LIKE);
					}}
					key={"reply"}
					className='flex-1 rounded-full bg-pink-700/50 backdrop-blur-2xl'
				>
					<Icon icon={"heart"} />
					<span className='text-foreground font-medium'>Ответить</span>
				</Button>
			),
			message: (
				<Link
					key={"message"}
					to={`https://t.me/${user.username}`}
					className='flex-1 bg-background/60 backdrop-blur-2xl rounded-full h-9.5 flex items-center justify-center'
				>
					<Icon icon={"message"} />
					<span className='text-foreground font-medium'>Написать</span>
				</Link>
			),
			profile: (
				<Link
					key={"profile"}
					to={`/profile/${user.id}`}
					className='flex-1 bg-muted-foreground/20 backdrop-blur-2xl rounded-full h-9 flex items-center justify-center'
				>
					<Icon icon='profile' />
					<span>Профиль</span>
				</Link>
			),
			report: (
				<div key={"report"}>
					<Button
						onClick={() => setOpenModal(!openModal)}
						className='flex rounded-full bg-destructive/20 backdrop-blur-2xl'
					>
						<Icon
							className='-mt-1'
							icon='report'
						/>
					</Button>
					{handleRenderModal({
						userId: user.id,
						open: openModal,
						onOpenChange: setOpenModal,
					})}
				</div>
			),
		};
		return buttons;
	};

	const handleRenderButtons = (props: Props) => {
		const buttonOrder = props.isLike
			? ["reply", "profile", "report"]
			: ["message", "profile", "report"];
		return buttonOrder.map(
			(key) => handleCreateButtons(props.user, props.myProfileId)[key],
		);
	};

	return {
		handleRenderButtons,
	};
};
