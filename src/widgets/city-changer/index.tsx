import { useState, type FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/shared/components/ui/command";
import { Button } from "@/shared/components/ui/button";
import { MapPin } from "lucide-react";
import { useGetCitiesByNameQuery } from "@/entities/city/api";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import type { CityResponse } from "@/entities/city/models";

type Props = {
  currentCity: string | null;
  setValue: any; 
}

export const CityChanger: FC<Props> = ({ currentCity, setValue }) => {
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const { data: searchedCities } = useGetCitiesByNameQuery(debouncedSearch, {
    skip: !debouncedSearch
  })

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger asChild>
        <Button className="w-full rounded-lg bg-background border-1 border-border text-muted-foreground hover:bg-card h-[40px] justify-center">
          <MapPin size={25}/>
          <h2 className="text-md">
            {searchedCities?.find(c => c.id === currentCity)?.name ?? 'Выбрать город'}
          </h2>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] bg-card">
        <Command className="w-full">
          <CommandInput 
              value={search} 
              onValueChange={setSearch}
              placeholder="Название города.." 
              className="h-[40px] w-full"/>
          <CommandList>
            <CommandEmpty>Не нашли города с таким именем</CommandEmpty>
            {searchedCities && Array.from(new Set(searchedCities.map((city) => 
              <CommandItem
                onSelect={() => {
                  setValue(city.id)
                  setOpenPopover(false)
                }}
                className={currentCity === city.id ? `bg-accent text-background` : `bg-transparent text-foreground`}
                value={city.name}
                key={city.id}>
                  {city.name}
              </CommandItem>                                  
            )))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
