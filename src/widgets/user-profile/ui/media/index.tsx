import type { UserMedia } from "@/entities/user/model/types";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/shared/components/ui/carousel";
import { cn } from "@/shared/lib/utils";
import { useState } from "react";

type UserProfileMediaProps = {
	media: UserMedia[];
};

export const UserProfileMedia: React.FC<UserProfileMediaProps> = ({
	media,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Carousel
			className={cn(
				`mx-4 my-4 rounded-2xl transition-all duration-300`,
				isOpen ? `h-[90vh]` : `h-87.5`,
			)}
		>
			<CarouselContent className='h-full'>
				{media.map((item) => (
					<CarouselItem
						className='rounded-2xl'
						key={item.id}
						onClick={() => setIsOpen(!isOpen)}
					>
						<img
							className={cn(
								`w-full rounded-2xl transition-all duration-300 object-cover`,
								isOpen ? "h-[90vh]" : "h-87.5",
							)}
							src={item.link}
							aria-label='User media'
							alt='media'
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};
