import { Select as MSelect, SelectProps as MSelectProps } from "@mantine/core";

type SelectProps = {
	label?: string;
	ariaLabel?: string;
	placeholder?: string;
	list: { label: string, value: string }[];
	value: MSelectProps["value"];
	defaultValue: MSelectProps["defaultValue"];
	onChange: MSelectProps["onChange"];
};

export const Select = ({
	label,
	value,
	placeholder,
	list,
	ariaLabel,
	onChange,
}: SelectProps) => {
	return (
		<MSelect
			aria-label={ariaLabel}
			label={label}
			placeholder={placeholder}
			value={value}
			data={list}
			allowDeselect={false}
			onChange={onChange}
		/>
	);
};
