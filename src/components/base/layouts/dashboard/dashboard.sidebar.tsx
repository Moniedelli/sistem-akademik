import { List } from "@/components/base/list";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";

const items = [
	{
		title: "Home",
		url: "#",
		Icon: Home,
	},
	{
		title: "Inbox",
		url: "#",
		Icon: Inbox,
	},
	{
		title: "Calendar",
		url: "#",
		Icon: Calendar,
	},
	{
		title: "Search",
		url: "#",
		Icon: Search,
	},
	{
		title: "Settings",
		url: "#",
		Icon: Settings,
	},
];

export const DashboardSidebar = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>test</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Dashboard</SidebarGroupLabel>
					<SidebarMenu>
						<List lists={items}>
							{({ url, Icon, title }, key) => (
								<SidebarMenuItem key={key}>
									<SidebarMenuButton asChild>
										<Link href={url}>
											<Icon />
											<span>{title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							)}
						</List>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<ul>
						<li>test</li>
						<li>test</li>
						<li>test</li>
					</ul>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};
