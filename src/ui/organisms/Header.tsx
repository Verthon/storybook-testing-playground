import { Burger, Group } from "@mantine/core";
import { Link, NavLink } from "react-router";
import { LanguageSwitcher } from "../molecules/languageSwitcher/LanguageSwitcher";
import { Avatar } from "../atoms/avatar/Avatar";

type HeaderProps = {
	opened: boolean;
	toggle: () => void;
};

export const Header = ({ opened, toggle }: HeaderProps) => {
	return (
		<Group mih={60}>
			<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
			<Link to={"/"}>Korpo</Link>
			<LanguageSwitcher />
			<NavLink to={"/profile"}>
				<Avatar />
			</NavLink>
		</Group>
	);
};
