import { type FC } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@shared/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@shared/components/ui/command";
import { Button } from "@shared/components/ui";
import { MapPin } from "lucide-react";
import { useCitySearch } from "@features/city-search";
import type { UseFormSetValue } from "react-hook-form";
import type { RegistrationFormData } from "@/features/registration";

type Props = {
  currentCity: string | null;
  setValue: UseFormSetValue<RegistrationFormData>;
};

export const CityChanger: FC<Props> = ({ currentCity, setValue }) => {
  const {
    isOpenPopover,
    setIsOpenPopover,
    searchValue,
    setSearchValue,
    searchedCities,
  } = useCitySearch();

  return (
    <Popover open={isOpenPopover} onOpenChange={setIsOpenPopover}>
      <PopoverTrigger asChild>
        <Button className='w-full rounded-lg bg-background border-1 border-border text-muted-foreground hover:bg-card h-[40px] justify-center'>
          <MapPin size={25} />
          <h2 className='text-md'>
            {searchedCities?.find((c) => c.id === currentCity)?.name ??
              "Выбрать город"}
          </h2>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[300px] bg-card'>
        <Command className='w-full'>
          <CommandInput
            value={searchValue}
            onValueChange={setSearchValue}
            placeholder='Название города..'
            className='h-[40px] w-full'
          />
          <CommandList>
            <CommandEmpty>Не нашли города с таким именем</CommandEmpty>
            {searchedCities &&
              Array.from(
                new Set(
                  searchedCities.map((city) => (
                    <CommandItem
                      onSelect={() => {
                        setValue("cityId", city.id);
                        setIsOpenPopover(false);
                      }}
                      className={
                        currentCity === city.id
                          ? `bg-accent text-background`
                          : `bg-transparent text-foreground`
                      }
                      value={city.name}
                      key={city.id}
                    >
                      {city.name}
                    </CommandItem>
                  ))
                )
              )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
