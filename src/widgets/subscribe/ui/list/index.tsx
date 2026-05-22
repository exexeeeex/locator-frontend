import { useSubscribe } from "@/features/subscribe/model/hooks";
import { SubscribeCard } from "../card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/shared/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";

export const SubscribeList: React.FC = () => {
	const { data: subscribes } = useSubscribe();

	return (
		<Carousel>
			<CarouselContent className='h-[90vh]'>
				<AnimatePresence mode='popLayout'>
					{subscribes?.map((subscribe, index) => (
						<CarouselItem key={subscribe.id}>
							<motion.div
								initial={{
									opacity: 0,
									y: 40,
									scale: 0.96,
									filter: "blur(8px)",
								}}
								animate={{
									opacity: 1,
									y: 0,
									scale: 1,
									filter: "blur(0px)",
								}}
								transition={{
									duration: 0.55,
									delay: index * 0.12,
									ease: [0.22, 1, 0.36, 1],
								}}
								className='h-full'
							>
								<SubscribeCard plan={subscribe} />
							</motion.div>
						</CarouselItem>
					))}
				</AnimatePresence>
			</CarouselContent>
		</Carousel>
	);
};
