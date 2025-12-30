import type { IconType } from "@/shared/types";
import {
  User,
  type LucideIcon,
  Heart,
  Flame,
  AlertCircle,
  Share2,
  MapPin,
} from "lucide-react";

export const ICON_MAP: Record<IconType, LucideIcon> = {
  profile: User,
  heart: Heart,
  fire: Flame,
  alert: AlertCircle,
  share: Share2,
  pin: MapPin,
};
