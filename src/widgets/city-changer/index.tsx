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
					className='
                      h-12 w-full rounded-2xl
                      bg-input/80 border border-border/40
                      justify-baseline px-4
                      text-[17px]
                    '
				>
					<MapPin size={18} />
					{searchedCities?.find((c) => c.id === currentCity)?.name ??
						"Выбрать город"}
				</Button>
			</PopoverTrigger>

			<PopoverContent
				className='
				  bg-linear-to-t from-card/40 to-transparent
				  backdrop-blur-2xl
        		  backdrop-saturate-150
      			  rounded-3xl
      			  border border-border/40
      			  shadow-xl
				  w-[80vw]
				  mt-1
      			'
			>
				<Command>
					<CommandInput
						value={searchValue}
						onValueChange={setSearchValue}
						placeholder='Поиск города'
					/>
					<CommandList className='mt-1'>
						<CommandEmpty>Город не найден</CommandEmpty>
						{searchedCities?.map((city) => (
							<CommandItem
								key={city.id}
								onSelect={() => {
									onSelectCity(city.id);
									setIsOpenPopover(false);
								}}
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
