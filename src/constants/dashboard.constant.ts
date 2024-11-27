import { PREFIX_ROUTES } from "@/constants/routes.constant";
import {
	BookOpenText,
	CalendarCheck2,
	ChartCandlestick,
	Contact,
	GraduationCap,
	Home,
	LucideProps,
	Presentation,
	Shapes,
	Users,
} from "lucide-react";

export interface SidebarMenuProps {
	title: string;
	href: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
}

export const SIDEBAR_ITEM_LIST: Array<
	SidebarMenuProps & {
		subMenu?: Array<SidebarMenuProps>;
	}
> = [
	{
		title: "Halaman Utama",
		href: "#",
		icon: Home,
		subMenu: [
			{
				title: "test",
				icon: Home,
				href: PREFIX_ROUTES.get("DASHBOARD"),
			},
		],
	},
	{
		title: "Manajemen Users",
		href: PREFIX_ROUTES.get("DASHBOARD"),
		icon: Users,
	},
	{
		title: "Management Siswa",
		href: "#",
		icon: GraduationCap,
	},
	{
		title: "Management Guru",
		href: "#",
		icon: Presentation,
	},
	{
		title: "Management Kelas",
		href: "#",
		icon: Shapes,
	},
	{
		title: "Management Pelajaran",
		href: "#",
		icon: BookOpenText,
	},
	{
		title: "Management Jadwal",
		href: "#",
		icon: CalendarCheck2,
	},
	{
		title: "Management Nilai",
		href: "#",
		icon: ChartCandlestick,
	},
	{
		title: "Management Kehadiran",
		href: "#",
		icon: Contact,
	},
];
