import { NavLink } from "react-router-dom"
import { _Links } from "../config/_links"

export const Navigation = () => {
  return (
    <nav className="w-[calc(100%-20px)] h-[60px] fixed bottom-[10px] bg-sidebar border-border border-[1.9px] rounded-xl left-1/2 -translate-x-1/2">
      <ul className="list-none w-full h-full items-center flex justify-between pl-[10px] pr-[10px]">  
        {_Links.map((link) =>
          <NavLink 
            className="group h-[calc(100%-7px)] rounded-lg flex items-center p-2 transition-colors" 
            to={`/${link.link}`} 
            key={link.id}
          >
             <div className="items-center flex flex-col">
              {link.icon}
              <p className="text-[12px] font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                {link.name}
              </p>
             </div>
          </NavLink>
        )}
      </ul>
    </nav>
  )
}
