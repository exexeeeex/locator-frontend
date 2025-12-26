import { Flame, Settings2 } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";

interface NavLink {
  id: number;
  icon: React.ReactNode,
  name: string;
  link: string;
}

export const _Links: NavLink[] = [
  {
    id: 1,
    icon: <Flame className="group-hover:text-primary  transition-colors" fill='currentColor' color='currentColor'/>,
    name: 'Анкеты',
    link: 'profiles'
  },
  {
    id: 2,
    icon: <Heart className="group-hover:text-primary transition-colors" fill='currentColor' color='currentColor'/>,
    name: 'Лайки',
    link: 'likes'
  },
  {
    id: 3,
    icon: <User className="group-hover:text-primary transition-colors" fill='currentColor' color='currentColor'/>,
    name: 'Профиль',
    link: 'profile'
  },
  {
    id: 4,
    icon: <Settings2 className="group-hover:text-primary transition-colors" fill='currentColor' color='currentColor'/>,
    name: 'Настройки',
    link: 'settings'
  }
]
