'use client';

import { Input } from "@/shared/ui/Input/Input";
import styles from "./Test.module.scss";
import { useState } from "react";

type Props = {}

export const Test = (props: Props) => {
    const [testValue, setTestValie] = useState<string>("");

    return (
        <div className={`${styles['test']}`}>
            <h1 className={`${styles['test__title']}`}>Test page</h1>
            <div className={`${styles['test__container']}`}>
                <Input id="testInput" placeholder="Тест"/>
            </div>
        </div>
    )
}