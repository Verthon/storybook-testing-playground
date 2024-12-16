import { Burger, Group } from "@mantine/core";
import { Link } from "react-router";

type HeaderProps = {
	opened: boolean;
	toggle: () => void;
};

export const Header = ({ opened, toggle }: HeaderProps) => {
	return (
		<Group mih={60}>
			<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
			<Link to={"/"}>Korpo</Link>
		</Group>
	);
};
