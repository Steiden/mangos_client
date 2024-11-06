"use client";

import { PageWrapper } from "@/shared/ui/PageWrapper/ui/PageWrapper";
import styles from "./Projects.module.scss";
import { Column, Table } from "@/shared/ui/Table/ui/Table";
import { useEffect, useState } from "react";
import { getProjects } from "@/entities/Project/api/project";
import { useLocalStorage } from "usehooks-ts";

export const Projects = () => {
	const [token] = useLocalStorage<string>("token", "");
	const columns: Column[] = [
		{
			label: <span className="mangos-accept_icon"></span>,
			name: "avatar",
		},
		{
			label: "Название",
			name: "name",
		},
		{
			label: "Статус выполнения",
			name: "execution_status",
		},
		{
			label: "Дата создания",
			name: "created_at",
		},
	];
	const [tableData, setTableData] = useState<Array<Record<string, any>>>([]);

	useEffect(() => {
		async function fetchProjects() {
			if(!token) return;

			const projectsData = await getProjects(token);

			if (!projectsData.success) {
				console.error("Failed to fetch projects:", projectsData.error);
				return;
			}

			console.log("Project data", projectsData);
			const projects = projectsData.data.map((project) => {
				return {
					avatar: project.id,
					name: project.name,
					execution_status: project.execution_status.name,
					created_at: new Date(project.created_at).toLocaleDateString("ru-RU"),
				};
			});
			setTableData(projects);
		}
		fetchProjects();
	}, []);

	return (
		<PageWrapper title="Проекты">
			<Table columns={columns} data={tableData} className={`${styles["projects__table"]}`} />
		</PageWrapper>
	);
};
