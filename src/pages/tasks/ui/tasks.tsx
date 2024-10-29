"use client";

import { PageWrapper } from "@/shared/ui/PageWrapper/ui/PageWrapper";
import styles from "./tasks.module.scss";
import { useEffect, useState } from "react";
import { Task } from "@/entities/Task/types/task";
import { getTasks } from "@/entities/Task/api/task";
import { TaskCard } from "@/widgets/TaskCard/ui/TaskCard";
import { useLocalStorage } from "usehooks-ts";
import { ModalInvoker } from "@/shared/ui/Modal/ui/ModalInvoker/ModalInvoker";
import { TaskModal } from "@/widgets/TaskCard/TaskModal/TaskModal";

export const Tasks = () => {
	const [token] = useLocalStorage("token", "");
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		async function fetchTasks() {
			const tasksData = await getTasks(token);

			if (!tasksData.success) return;
			setTasks(tasksData.data);
		}
		fetchTasks();
	}, []);

	return (
		<PageWrapper className={`${styles["tasks"]}`} title="Задачи">
			<ul className={`${styles["tasks__list"]}`}>
				{tasks?.map((task) => (
					<li className={`${styles["tasks__item"]}`} key={task.id}>
						<ModalInvoker ModalContent={TaskModal} modalContentProps={{ task }} modalProps={{ className: `${styles['tasks__modal']}` }}>
							<TaskCard data={task} />
						</ModalInvoker>
					</li>
				))}
			</ul>
		</PageWrapper>
	);
};
