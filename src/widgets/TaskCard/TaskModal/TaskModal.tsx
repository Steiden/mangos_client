'use client';

import { Task } from '@/entities/Task/types/task';
import styles from './TaskModal.module.scss';
import { ModalActive } from '@/shared/types/modal';
import { TaskCard } from '../ui/TaskCard';

type Props = {
    active: ModalActive;
    task: Task;
};

export const TaskModal = ({ active, task, ...rest }: Props) => {
    return (
        <div className={`${styles['task-modal']}`}>
            <TaskCard {...task} />
        </div>
    )
}