"use client";

import styles from "./Table.module.scss";

export type Column = {
	label: any;
	name: string;
};

type Props = React.HTMLAttributes<HTMLTableElement> & {
	columns: Column[];
	data: Array<Record<string, any>>;
};

export const Table = ({ columns, data, className, ...rest }: Props) => {
	return (
		<div className={`${styles["table__wrapper"]} ${className}`} {...rest}>
			<table className={`${styles["table"]}`}>
				<thead className={`${styles["table__thead"]}`}>
					<tr className={`${styles["table__tr"]}`}>
						{columns?.map((column) => (
							<th className={`${styles["table__th"]}`} key={column.name}>
								{column.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody className={`${styles["table__tbody"]}`}>
					{data?.map((item, index) => (
						<tr key={index} className={`${styles["table__tr"]}`}>
							{columns?.map((column) => (
								<td className={`${styles["table__td"]}`} key={column.name}>
									{item[column.name]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
