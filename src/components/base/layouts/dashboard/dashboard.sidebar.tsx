"use client";
import React from "react";
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
	SidebarMenuSub,
} from "@/components/ui/sidebar";
import { SIDEBAR_ITEM_LIST, SidebarMenuProps } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";

const CollapsibleMenuItem: React.FC<
	SidebarMenuProps & {
		subMenu?: Array<SidebarMenuProps>;
	}
> = ({ title, Icon, subMenu }) => {
	const pathname = usePathname();

	return (
		<Collapsible className="group/collapsible">
			<SidebarMenuItem>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton
						{...{
							tooltip: title,
						}}>
						<Icon />
						<span>{title}</span>
						<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						<List lists={subMenu}>
							{(item, subKey) => (
								<SidebarMenuButton
									key={subKey}
									{...{
										asChild: true,
										isActive: pathname === item.href,
									}}>
									<Link href={item.href}>
										<item.Icon />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							)}
						</List>
					</SidebarMenuSub>
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	);
};

const MenuItem: React.FC<SidebarMenuProps> = ({ title, href, Icon }) => {
	const pathname = usePathname();

	return (
		<SidebarMenuItem>
			<SidebarMenuButton
				{...{
					asChild: true,
					tooltip: title,
					isActive: pathname === href,
				}}>
				<Link href={href}>
					<Icon />
					<span>{title}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
};

export const DashboardSidebar = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>test</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Dashboard</SidebarGroupLabel>
					<SidebarMenu>
						<List lists={SIDEBAR_ITEM_LIST}>
							{(item, key) => {
								return item.subMenu &&
									item.subMenu.length > 0 ? (
									<CollapsibleMenuItem {...item} key={key} />
								) : (
									<MenuItem {...item} key={key} />
								);
							}}
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
