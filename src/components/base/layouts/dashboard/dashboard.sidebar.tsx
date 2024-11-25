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
import Items from "@/constants/sidebar.constant";
import Link from "next/link";


export const DashboardSidebar = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>test</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Dashboard</SidebarGroupLabel>
					<SidebarMenu>
						<List lists={Items}>
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
