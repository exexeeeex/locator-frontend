import React, { useState, useMemo } from "react";
import type { Subscribe } from "@/entities/subscribe/types/subscribe";
import { Button } from "@/shared/components";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger,
} from "@/shared/components/ui/drawer";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

interface BuySubscribeButtonProps {
	plan: Subscribe;
}

export const BuySubscribeButton: React.FC<BuySubscribeButtonProps> = ({
	plan,
}) => {
	const isPremium = plan.name.toLowerCase() === "premium";
	const [selectedPlanId, setSelectedPlanId] = useState<number>(1);

	const plans = useMemo(
		() => [
			{
				id: 1,
				duration: "1 месяц",
				price: plan.price,
				monthlyPrice: plan.price,
				discount: 0,
			},
			{
				id: 2,
				duration: "3 месяца",
				price: plan.price * 3 * 0.9,
				monthlyPrice: plan.price * 0.9,
				discount: 10,
			},
			{
				id: 3,
				duration: "6 месяцев",
				price: plan.price * 6 * 0.8,
				monthlyPrice: plan.price * 0.8,
				discount: 20,
			},
			{
				id: 4,
				duration: "12 месяцев",
				price: plan.price * 12 * 0.7,
				monthlyPrice: plan.price * 0.7,
				discount: 30,
			},
		],
		[plan.price],
	);

	const selectedPlan = plans.find((p) => p.id === selectedPlanId);

	const handleCheckout = () => {};

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					className={cn(
						"w-full mt-6 rounded-xl font-semibold text-base text-foreground transition",
						isPremium
							? "bg-linear-to-r from-primary to-accent hover:opacity-95"
							: "bg-muted hover:bg-muted/80 ",
					)}
				>
					Оформить {plan.name}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='bg-secondary border-t-white/10 mx-auto w-full max-w-md rounded-t-[2rem] p-4 pb-8'>
				<div className='mb-6 mt-2 text-center'>
					<h2 className='text-2xl font-bold tracking-tight text-foreground'>
						Выберите период
					</h2>
					<p className='text-sm text-muted-foreground mt-1'>
						Чем дольше, тем выгоднее
					</p>
				</div>

				<div className='flex flex-col gap-3 px-2'>
					{plans.map((p) => {
						const isSelected = selectedPlanId === p.id;

						return (
							<div
								key={p.id}
								onClick={() => setSelectedPlanId(p.id)}
								role='button'
								tabIndex={0}
								className={cn(
									"group relative flex w-full items-center justify-between overflow-hidden rounded-2xl p-4 cursor-pointer",
									"transition-all duration-300",
									isSelected
										? "border border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.15)]"
										: "border border-card/30 bg-card/30 hover:bg-white/6 hover:border-white/10",
								)}
							>
								<div
									className={cn(
										"absolute inset-0 bg-linear-to-r from-primary/10 to-transparent transition-opacity duration-500",
										isSelected
											? "opacity-100"
											: "opacity-0 group-hover:opacity-100",
									)}
								/>

								<div className='relative z-10 flex flex-col justify-center gap-1'>
									<div className='flex items-center gap-2'>
										<span
											className={cn(
												"text-[16px] font-bold tracking-tight transition-colors",
												isSelected
													? "text-primary"
													: "text-foreground/90 group-hover:text-foreground",
											)}
										>
											{p.duration}
										</span>
										{p.discount > 0 && (
											<Badge
												className={cn(
													"h-5 text-[10px] px-1.5 font-bold",
													isSelected
														? "bg-primary text-primary-foreground"
														: "bg-primary/20 text-primary group-hover:bg-primary/30",
												)}
											>
												-{p.discount}%
											</Badge>
										)}
									</div>

									{p.id !== 1 && (
										<span className='text-[13px] font-medium text-muted-foreground transition-colors group-hover:text-foreground/70'>
											{p.monthlyPrice.toFixed(0)} ₽ / мес
										</span>
									)}
								</div>

								<div className='relative z-10 flex items-end justify-center flex-col'>
									<span className='text-xl font-extrabold tracking-tight text-foreground/90'>
										{p.price.toFixed(0)} ₽
									</span>
								</div>
							</div>
						);
					})}
				</div>

				<DrawerFooter className='px-2 pt-6'>
					<Button
						onClick={handleCheckout}
						className={cn(
							"w-full rounded-xl h-12 font-bold text-base transition-all",
							isPremium
								? "bg-linear-to-r from-primary to-accent text-white shadow-[0_4px_20px_-4px_rgba(var(--primary),0.4)] hover:shadow-[0_4px_25px_-2px_rgba(var(--primary),0.5)]"
								: "bg-primary text-primary-foreground hover:bg-primary/90",
						)}
					>
						Оплатить {selectedPlan?.price.toFixed(0)} ₽
					</Button>

					<DrawerClose asChild>
						<Button
							variant='ghost'
							className='rounded-xl w-full mt-1 text-muted-foreground hover:text-foreground hover:bg-white/5'
						>
							Отмена
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
