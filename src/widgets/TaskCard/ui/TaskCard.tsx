"use client";

import { Task, TaskFillable } from "@/entities/Task/types/task";
import styles from "./TaskCard.module.scss";
import { TagItem } from "./TagItem/TagItem";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Nullable } from "@/shared/types/nullable";
import { Input } from "@/shared/ui/Input/Input";
import { Tag, TagsResponse } from "@/entities/Task/types/tag";
import { getTags } from "@/entities/Task/api/tag";
import { useLocalStorage } from "usehooks-ts";
import { ActionDropdownInvoker } from "@/shared/ui/ActionDropdown/ui/ActionDropdownInvoker/ActionDropdownInvoker";
import { DropdownAction } from "@/shared/ui/ActionDropdown/types/actionDropdown";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	data?: Task;
	isEdit?: boolean;
	taskData?: {
		data: Nullable<TaskFillable>;
		setData: Dispatch<SetStateAction<Nullable<TaskFillable>>>;
	};
};

export const TaskCard = ({ className, data, isEdit, taskData, ...props }: Props) => {
	const [token] = useLocalStorage("token", "");
	const [tags, setTags] = useState<Tag[]>([]);
	const actions: DropdownAction[] =
		tags
			.map((tag, index) => {
				const newTags = [...(taskData?.data?.tags || [])];
				newTags?.push(tag);

				return {
					id: index,
					label: tag.name,
					onClick: () => {
						taskData?.setData({ ...taskData.data!, tags: newTags });
					},
				};
			})
			.filter((item) => !taskData?.data?.tags.find((tag) => tag.name == item.label)) || [];

	useEffect(() => {
		async function fetchTags() {
			const tagsData = await getTags(token);
			if (tagsData?.success) {
				setTags(tagsData.data);
				return;
			}
		}
		fetchTags();
	}, []);

	const deleteTag = (index: number) => {
		taskData?.setData({
			...taskData.data!,
			tags: taskData.data?.tags.filter((tag, i) => i !== index) || [],
		});
	};

	return (
		<article className={`${styles["task-card"]} ${className}`} {...props}>
			<div className={`${styles["task-card__header"]}`}></div>
			<div className={`${styles["task-card__content"]}`}>
				{!isEdit ? (
					<>
						<h2 className={`${styles["task-card__title"]}`}>{data?.name}</h2>
						<p className={`${styles["task-card__text"]}`}>{data?.description}</p>
						<p className={`${styles["task-card__text"]}`}>
							Срок: {new Date(data?.finished_at || "").toLocaleDateString("ru-RU")}
						</p>
						<ul className={`${styles["task-card__tag-list"]}`}>
							{data?.tags?.map((tag) => (
								<li className={`${styles["task-card__tag-item"]}`} key={tag.id}>
									<TagItem {...tag} />
								</li>
							))}
						</ul>
					</>
				) : (
					<>
						<Input
							placeholder="Заголовок"
							value={taskData?.data?.name}
							onChange={(e) =>
								taskData?.setData({ ...taskData.data!, name: e.target.value })
							}
						/>
						<Input
							placeholder="Описание"
							value={taskData?.data?.description}
							onChange={(e) =>
								taskData?.setData({
									...taskData.data!,
									description: e.target.value,
								})
							}
						/>
						<Input
							placeholder="Срок"
							type="date"
							value={new Date(taskData?.data?.finished_at || "").toLocaleDateString(
								"ru-RU"
							)}
							onChange={(e) =>
								taskData?.setData({
									...taskData.data!,
									finished_at: new Date(e.target.value),
								})
							}
						/>
						<ul className={`${styles["task-card__tag-list"]}`}>
							{taskData?.data?.tags?.map((tag, index) => (
								<li
									key={tag.id}
									className={`${styles["task-card__tag-item"]} ${styles["task-card__tag-item--delete"]}`}
									onClick={() => deleteTag(index)}
								>
									<TagItem {...tag} />
								</li>
							))}
							<ActionDropdownInvoker actions={actions}>
								<div
									className={`${styles["task-card__tag-item"]} ${styles["task-card__tag-item--add"]}`}
								>
									Добавить
									<span
										className={`mangos-plus_icon ${styles["task-card__tag-icon"]}`}
									></span>
								</div>
							</ActionDropdownInvoker>
						</ul>
					</>
				)}
			</div>
		</article>
	);
};
