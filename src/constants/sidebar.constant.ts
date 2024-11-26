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
	Icon: React.ForwardRefExoticComponent<
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
		Icon: Home,
		subMenu: [
			{
				title: "test",
				Icon: Home,
				href: PREFIX_ROUTES.get("DASHBOARD"),
			},
		],
	},
	{
		title: "Manajemen Users",
		href: PREFIX_ROUTES.get("DASHBOARD"),
		Icon: Users,
	},
	{
		title: "Management Siswa",
		href: "#",
		Icon: GraduationCap,
	},
	{
		title: "Management Guru",
		href: "#",
		Icon: Presentation,
	},
	{
		title: "Management Kelas",
		href: "#",
		Icon: Shapes,
	},
	{
		title: "Management Pelajaran",
		href: "#",
		Icon: BookOpenText,
	},
	{
		title: "Management Jadwal",
		href: "#",
		Icon: CalendarCheck2,
	},
	{
		title: "Management Nilai",
		href: "#",
		Icon: ChartCandlestick,
	},
	{
		title: "Management Kehadiran",
		href: "#",
		Icon: Contact,
	},
];
