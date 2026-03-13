import { type FC } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/components/ui/popover";
import {
	Command,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/shared/components/ui/command";
import { Button } from "@/shared/components/ui";
import { MapPin } from "lucide-react";
import { useCitySearch } from "@/features/city-search";
import { cn } from "@/shared/lib/utils";

type Props = {
	currentCity: string | null;
	onSelectCity: (id: string) => void;
};

export const CityChanger: FC<Props> = ({ currentCity, onSelectCity }) => {
	const {
		isOpenPopover,
		setIsOpenPopover,
		searchValue,
		setSearchValue,
		searchedCities,
	} = useCitySearch();

	return (
		<Popover
			open={isOpenPopover}
			onOpenChange={setIsOpenPopover}
		>
			<PopoverTrigger asChild>
				<Button
					variant='ghost'
					className={cn(
						"h-14 w-full rounded-2xl justify-start px-4",
						"text-[15px] font-normal transition-all duration-300 outline-none",
						"bg-foreground/2 border border-foreground/6",
						currentCity ? "text-foreground" : "text-muted-foreground/40",
						"hover:bg-foreground/4 hover:border-primary/50 hover:text-foreground",
						"data-[state=open]:bg-foreground/2 data-[state=open]:border-primary",
						"data-[state=open]:ring-[3px] data-[state=open]:ring-primary/10",
					)}
				>
					<MapPin
						className='mr-3 text-primary/70'
						size={20}
					/>
					{searchedCities?.find((c) => c.id === currentCity)?.name ??
						"Выбрать город"}
				</Button>
			</PopoverTrigger>

			<PopoverContent
				className={cn(
					"w-[80vw] p-1 mt-2 rounded-[1.5rem]",
					"bg-card/65 backdrop-blur-3xl backdrop-saturate-150",
					"border border-border shadow-xl shadow-black/5 dark:shadow-black/20",
				)}
			>
				<Command className='bg-transparent'>
					<CommandInput
						value={searchValue}
						onValueChange={setSearchValue}
						placeholder='Поиск города...'
						className='text-[15px] border-none focus:ring-0 placeholder:text-muted-foreground/40'
					/>
					<CommandList className='mt-2 max-h-50 p-1'>
						<CommandEmpty className='py-6 text-center text-[15px] text-muted-foreground'>
							Город не найден 💔
						</CommandEmpty>
						{searchedCities?.map((city) => (
							<CommandItem
								key={city.id}
								onSelect={() => {
									onSelectCity(city.id);
									setIsOpenPopover(false);
								}}
								className={cn(
									"rounded-xl px-4 py-3 mb-1 cursor-pointer transition-colors text-[15px]",
									"aria-selected:bg-card aria-selected:text-foreground",
								)}
							>
								{city.name}
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
