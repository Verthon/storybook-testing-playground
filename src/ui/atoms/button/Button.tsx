import { Button as MButton } from "@mantine/core";
import { type PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
	return <MButton>{children}</MButton>;
};
