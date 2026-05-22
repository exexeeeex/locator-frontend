import { CarouselContent, CarouselItem } from "@/shared/components/ui/carousel";
import { useQuestionnariesContext } from "../../../context";

export const QuestionnairePhotos: React.FC = () => {
	const { candidate } = useQuestionnariesContext();

	const sortedPhotos = [...candidate.userMedias].sort(
		(a, b) => (b.isPriority ? 1 : 0) - (a.isPriority ? 1 : 0),
	);

	return (
		<CarouselContent className='h-full'>
			{sortedPhotos.map((photo, index) => (
				<CarouselItem
					key={index}
					className='h-full relative'
				>
					<img
						className='w-full h-full object-cover'
						src={photo.link}
						alt={`Фото ${index + 1}`}
						loading={index === 0 ? "eager" : "lazy"}
					/>
					<div className='absolute inset-0 bg-linear-to-t from-background/95 via-background/40 to-transparent pointer-events-none' />
				</CarouselItem>
			))}
		</CarouselContent>
	);
};
