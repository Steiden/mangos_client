export type DropdownAction = {
	id: number;
	label: string;
	icon?: string;
	disabled?: boolean;
	className?: string;
	separator?: boolean;
	onClick?: () => void;
};