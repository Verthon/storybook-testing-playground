import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "../organisms/Header";
import { Outlet } from "react-router";

export const AppLayout = () => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Header opened={opened} toggle={toggle} />
			</AppShell.Header>

			<AppShell.Navbar p="md">Sidebar</AppShell.Navbar>

			<AppShell.Main><Outlet /></AppShell.Main>
		</AppShell>
	);
};
