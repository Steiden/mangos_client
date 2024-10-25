"use client";

import { Tag } from "@/entities/Task/types/tag";
import styles from "./TagItem.module.scss";

type Props = Tag;

export const TagItem = (props: Props) => {
	return <article className={`${styles["tag-item"]}`}>{props.name}</article>;
};
