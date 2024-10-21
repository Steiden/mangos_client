import { Test } from "@/pages/test/ui/Test";
import { Metadata } from "next";

export const meta: Metadata = {
	title: "Mangos | Тест",
	description: "Страница теста ui компонентов",
};

export default function TestPage() {
	return <Test />;
}
