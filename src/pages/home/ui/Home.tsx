"use client";

import { Button } from "@/shared/ui/Button/ui/Button";
import styles from "./Home.module.scss";

type AdvatangeItem = {
	id: number;
	label: string;
	icon?: string;
};

type Props = {};

export const Home = (props: Props) => {
	const advantages: AdvatangeItem[] = [
		{
			id: 1,
			label: "Управляйте организациями, создавайте проекты и назначайте задачи. Всё под вашим контролем.",
			icon: "mangos-company_icon",
		},
		{
			id: 2,
			label: "Чаты для команды и личные переписки обеспечат эффективное взаимодействие.",
			icon: "mangos-message_icon",
		},
		{
			id: 3,
			label: "Настройте автоматические сценарии для ускорения бизнес-процессов.",
			icon: "mangos-chart_icon",
		},
		{
			id: 4,
			label: "Не пропустите важные события благодаря мгновенным уведомлениям и отчетам.",
			icon: "mangos-bell_icon",
		},
	];

	return (
		<section className={`${styles["welcome"]}`}>
			<div className={`${styles["welcome__start"]}`}>
				<h1 className={`${styles["welcome__title"]}`}>Mangos</h1>
				<div className={`${styles["welcome__start-content"]}`}>
					<p className={`${styles["welcome__subtitle"]}`}>
						Платформа для управления деятельностью вашей организации
					</p>
					<div className={`${styles["welcome__start-buttons"]}`}>
						<Button
							className={`${styles["welcome__start-button"]} ${styles["welcome__start-button--primary"]}`}
							style="primary"
						>
							Начать
						</Button>
						<Button className={`${styles["welcome__start-button"]}`} style="secondary">
							Документация
						</Button>
					</div>
				</div>
			</div>
			<ul className={`container ${styles["welcome__advantages-list"]}`}>
				{advantages.map((advantage) => (
					<li className={`${styles["welcome__advantage"]}`} key={advantage.id}>
						<span
							className={`${styles["welcome__advantage-icon"]} ${advantage.icon}`}
						></span>
						<p className={`${styles["welcome__advantage-text"]}`}>{advantage.label}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
