"use client";

import { useLocalStorage } from "usehooks-ts";
import { TaskCard } from "../ui/TaskCard";
import styles from "./TaskCreate.module.scss";
import { useState } from "react";
import { TaskFillable } from "@/entities/Task/types/task";
import { Nullable } from "@/shared/types/nullable";
import { createTask } from "@/entities/Task/api/task";
import { ModalActive } from "@/shared/types/modal";

type Props = React.HTMLAttributes<HTMLDivElement> & {
    active: ModalActive;
};

export const TaskCreate = ({ className, active, ...rest }: Props) => {
	const [token] = useLocalStorage("token", "");
	const [data, setData] = useState<Nullable<TaskFillable>>(null);

    const handleCreate = async () => {
        if(!data) return;

        const createData = await createTask(data, token);
        if(createData?.success) {
            active.setIsActive(false);
        }
    }

	return (
		<div className={`${styles["task-modal"]} ${className}`} {...rest}>
			<TaskCard
				className={styles["task-modal__card"]}
				isEdit={true}
				taskData={{ data, setData }}
			/>

			<div className={`${styles["task-modal__actions"]}`}>
				<button
					className={`${styles["task-modal__action-button"]} ${styles["task-modal__action-button--accept"]}`}
					onClick={handleCreate}
				>
					<span
						className={`mangos-accept_icon ${styles["task-modal__action-icon"]}`}
					></span>
				</button>
				<button
					className={`${styles["task-modal__action-button"]} ${styles["task-modal__action-button--delete"]}`}
					onClick={() => active.setIsActive(false)}
				>
					<span
						className={`mangos-close_icon ${styles["task-modal__action-icon"]}`}
					></span>
				</button>
			</div>
		</div>
	);
};
