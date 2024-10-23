import styles from "./ActionDropdownInvoker.module.scss";
import { ActionDropdown } from "../ActionDropdown/ActionDropdown";
import { useState } from "react";
import { DropdownAction } from "../../types/actionDropdown";

type Props = {
	actions: DropdownAction[];
	children: React.ReactNode;
};

export const ActionDropdownInvoker = ({ children, ...rest }: Props) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<div
			className={`${styles["action-dropdown-invoker"]}`}
			onClick={(e: React.MouseEvent<HTMLDivElement>) => {
				e.stopPropagation();
				setIsActive(!isActive);
			}}
		>
			{children}
			<ActionDropdown actions={rest.actions} active={{ isActive, setIsActive }} />
		</div>
	);
};
