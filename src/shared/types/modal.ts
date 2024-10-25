import { Dispatch, SetStateAction } from "react";

export type ModalActive = {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
};
