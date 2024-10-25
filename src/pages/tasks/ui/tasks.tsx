"use client";

import { PageWrapper } from "@/shared/ui/PageWrapper/ui/PageWrapper";
import styles from "./tasks.module.scss";
import { useEffect, useState } from "react";
import { Task } from "@/entities/Task/types/task";
import { getTasks } from "@/entities/Task/api/task";
import { TaskCard } from "@/widgets/TaskCard/ui/TaskCard";
import { useLocalStorage } from "usehooks-ts";

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
					<li className={`${styles["tasks__item"]}`}>
						<TaskCard {...task} />
					</li>
				))}
			</ul>
		</PageWrapper>
	);
};
