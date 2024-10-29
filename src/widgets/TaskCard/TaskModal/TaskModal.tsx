"use client";

import { Task, TaskFillable } from "@/entities/Task/types/task";
import styles from "./TaskModal.module.scss";
import { ModalActive } from "@/shared/types/modal";
import { TaskCard } from "../ui/TaskCard";
import { useState } from "react";
import { deleteTask, updateTask } from "@/entities/Task/api/task";
import { useLocalStorage } from "usehooks-ts";
import { Nullable } from "@/shared/types/nullable";

type Props = {
	active: ModalActive;
	task: Task;
};

export const TaskModal = ({ active, task, ...rest }: Props) => {
    const [token] = useLocalStorage("token", "");
	const [isEdit, setIsEdit] = useState<boolean>(false);
    const [data, setData] = useState<Nullable<TaskFillable>>(task);

    const handleEdit = async () => {
		if(!data) return;

		const taskData = await updateTask(task.id, data, token);
		if(taskData.success) {
			setIsEdit(false);
		}
    }

    const handleDelete = async () => {
        const taskData = await deleteTask(task.id, token);
        if(taskData.success) {
            active.setIsActive(false);
        }
    }

	return (
		<div className={`${styles["task-modal"]}`}>
			<TaskCard data={task} className={styles["task-modal__card"]} isEdit={isEdit} taskData={{ data, setData }} />

			<div className={`${styles["task-modal__actions"]}`}>
				{isEdit ? (
					<>
						<button
							className={`${styles["task-modal__action-button"]} ${styles["task-modal__action-button--accept"]}`}
                            onClick={handleEdit}
						>
							<span
								className={`mangos-accept_icon ${styles["task-modal__action-icon"]}`}
							></span>
						</button>
						<button
							className={`${styles["task-modal__action-button"]} ${styles["task-modal__action-button--delete"]}`}
                            onClick={() => setIsEdit(false)}
						>
							<span
								className={`mangos-close_icon ${styles["task-modal__action-icon"]}`}
							></span>
						</button>
					</>
				) : (
					<>
						<button
							className={`${styles["task-modal__action-button"]} ${styles["task-modal__action-button--edit"]}`}
                            onClick={() => setIsEdit(true)}
						>
							<span
								className={`mangos-edit_icon ${styles["task-modal__action-icon"]}`}
							></span>
						</button>
						<button
							className={`${styles["task-modal__action-button"]} ${styles["task-modal__action-button--delete"]}`}
                            onClick={handleDelete}
						>
							<span
								className={`mangos-trash_icon ${styles["task-modal__action-icon"]}`}
							></span>
						</button>
					</>
				)}
			</div>
		</div>
	);
};
