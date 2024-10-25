"use client";

import { Task } from "@/entities/Task/types/task";
import styles from "./TaskCard.module.scss";
import { TagItem } from "./TagItem/TagItem";

type Props = Task;

export const TaskCard = (props: Props) => {
	return (
		<article className={`${styles["task-card"]}`}>
			<div className={`${styles["task-card__header"]}`}></div>
			<div className={`${styles["task-card__content"]}`}>
				<h2 className={`${styles["task-card__title"]}`}>{props.name}</h2>
				<p className={`${styles["task-card__text"]}`}>{props.description}</p>
				<p className={`${styles["task-card__text"]}`}>
					Срок: {new Date(props.finished_at).toLocaleDateString("ru-RU")}
				</p>
				<ul className={`${styles["task-card__tag-list"]}`}>
					{props.tags?.map((tag) => (
						<li className={`${styles["task-card__tag-item"]}`}>
							<TagItem {...tag} />
						</li>
					))}
				</ul>
			</div>
		</article>
	);
};
