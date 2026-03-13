import type { IconType } from "@/shared/types";
import {
	User,
	type LucideIcon,
	Heart,
	Flame,
	AlertCircle,
	Share2,
	MapPin,
	BriefcaseBusiness,
	GraduationCap,
	Settings,
	Camera,
	X as Close,
	Star,
} from "lucide-react";

export const ICON_MAP: Record<IconType, LucideIcon> = {
	profile: User,
	heart: Heart,
	fire: Flame,
	alert: AlertCircle,
	share: Share2,
	pin: MapPin,
	work: BriefcaseBusiness,
	education: GraduationCap,
	settings: Settings,
	camera: Camera,
	close: Close,
	star: Star,
};
