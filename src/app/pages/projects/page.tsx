import { Projects } from "@/pages/projects/ui/Projects";
import { Metadata } from "next";

export const meta: Metadata = {
	title: "Mangos | Проекты",
	description: "Страница проектов",
};

export default function ProjectsPage() {
    return <Projects />
}