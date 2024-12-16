import { Select as MSelect, SelectProps as MSelectProps } from "@mantine/core";

type SelectProps = {
	label: string;
	placeholder?: string;
	list: string[];
	value: MSelectProps["value"];
	defaultValue: MSelectProps["defaultValue"];
	onChange: MSelectProps["onChange"];
};

export const Select = ({
	label,
	value,
	placeholder,
	list,
	onChange,
}: SelectProps) => {
	return (
		<MSelect
			label={label}
			placeholder={placeholder}
			value={value}
			data={list}
			onChange={onChange}
		/>
	);
};
